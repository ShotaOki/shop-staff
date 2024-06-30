export interface ChooseOrderItem {
  name: string;
  counts: number;
  required?: string[];
  options?: string[];
}

export interface ChooseOrder {
  order: ChooseOrderItem[];
}

export interface ChooseOrderInput {
  message: string;
}
