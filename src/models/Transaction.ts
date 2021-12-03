import { ITransaction, ITransactionData } from './interfaces/ITransaction';

export class Transaction implements ITransaction {
  private id: string | undefined;
  private description: string | undefined;
  private amount: number | undefined;
  private date: string | undefined;

  public save(data: ITransactionData): void {
    this.id = data.id;
    this.description = data.description;
    this.amount = data.amount;
    this.date = data.date;
  }

  public findAll(): ITransactionData | undefined {
    if (
      this.id &&
      this.description &&
      this.description &&
      this.amount &&
      this.date
    ) {
      return {
        id: this.id,
        description: this.description,
        amount: this.amount,
        date: this.date,
      };
    }
  }
}
