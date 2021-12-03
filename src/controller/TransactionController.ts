import { v4 as uuid4 } from 'uuid';
import { ITransaction } from '../models/interfaces/ITransaction';

export class TransactionController {
  private transaction: ITransaction;
  private inputDescription: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputDate: HTMLInputElement;
  private formSubmit: HTMLFormElement;

  constructor(transaction: ITransaction) {
    this.transaction = transaction;
    this.formSubmit = document.querySelector('#form-submit') as HTMLFormElement;
    this.inputDescription = document.querySelector(
      '#description',
    ) as HTMLInputElement;
    this.inputAmount = document.querySelector('#amount') as HTMLInputElement;
    this.inputDate = document.querySelector('#date') as HTMLInputElement;
  }

  store(): void {
    this.formSubmit.addEventListener('submit', (event: SubmitEvent) => {
      event.preventDefault();
      const response = {
        id: uuid4(),
        description: this.inputDescription.value,
        amount: parseFloat(this.inputAmount.value),
        date: this.inputDate.value,
      };
      this.transaction.save(response);
      console.log(`transaction`, this.transaction.findAll());
    });
  }
}
