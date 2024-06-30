import * as z from "zod";
import { PromptBase } from "../prompts/data/base";
import { ChooseOrderPrompt } from "../prompts/data/choose-order";
import { createCommonMessage } from "../prompts/data/common-message";
import { createYesOrNoMessagePrompt } from "../prompts/data/yes-or-no";

const OrderItem = z.object({
  name: z.string(),
  counts: z.number(),
});

export interface IssueRecord {
  code: "custom";
  priority: number;
  agent: () => PromptBase<any>;
}

export const Order = z.object({
  welcome: z
    .boolean()
    .optional()
    .superRefine((val, ctx) => {
      if (val === undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          priority: 1,
          agent: createCommonMessage("いらっしゃいませ、ようこそ"),
        } as IssueRecord);
        return z.INVALID;
      }
    }),
  completed: z
    .boolean()
    .optional()
    .superRefine((val, ctx) => {
      if (val === undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          priority: 9999,
          agent: createYesOrNoMessagePrompt({
            message: "ご注文は以上でよろしいですか？",
            messagePrefix: "はい、承知いたしました。",
            applyKey: "completed",
            response: {
              yes: "ありがとうございます、お会計をいたします",
              no: "注文をどうぞ",
            },
          }),
        } as IssueRecord);
        return z.INVALID;
      }
    }),
  isTakeout: z
    .boolean()
    .optional()
    .superRefine((val, ctx) => {
      if (val === undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          priority: 10,
          agent: createYesOrNoMessagePrompt({
            message: "お持ち帰りでよろしいですか？",
            messagePrefix: "はい、承知いたしました。",
            applyKey: "isTakeout",
            response: {
              yes: "お持ち帰りですね",
              no: "店内をご利用ですね",
            },
          }),
        } as IssueRecord);
        return z.INVALID;
      }
    }),
  order: z
    .array(OrderItem)
    .optional()
    .superRefine((val, ctx) => {
      if (val === undefined || val.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          priority: 20,
          agent: ChooseOrderPrompt.fuctory,
        } as IssueRecord);
        return z.INVALID;
      }
    }),
});

export function checkOrder(order: any) {
  try {
    console.log(order);
    // オーダーをチェックする
    const parsed = Order.parse(order);
    console.log(parsed);
  } catch (e: any) {
    console.log(e);
    console.log(e.issues);
    // オーダーが未定義なら、issueにaddIssueで格納したデータが入る
    const issueList = e.issues
      .filter((issue: IssueRecord) => (issue.priority ?? 0) >= 1) // 独自定義したissueだけをフィルタする
      .sort((a: IssueRecord, b: IssueRecord) => a.priority - b.priority); // 優先度を数字の小さい順に並べる
    if (issueList.length >= 1) {
      console.log(issueList[0]);
      return issueList[0] as IssueRecord; // 優先度の数字が最も小さい値を返す
    }
  }
}
