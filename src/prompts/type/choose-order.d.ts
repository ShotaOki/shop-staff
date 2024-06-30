export interface ChooseOrderItem {
  name: string;
  counts: number;
}

export interface ChooseOrder {
  order: ChooseOrderItem[];
}

export interface ChooseOrderInput {
  message: string;
}
