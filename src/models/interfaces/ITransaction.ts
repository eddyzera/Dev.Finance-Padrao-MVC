export interface ITransactionData {
  id: string;
  description: string;
  amount: number;
  date: string;
}

export interface ITransaction {
  save: (data: ITransactionData) => void;
  findAll: () => ITransactionData | undefined;
}
