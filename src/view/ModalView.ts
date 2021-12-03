import { IModalView } from './interfaces/IModalView';

export class ModalView implements IModalView {
  private buttonOpen: HTMLElement;
  private buttonClose: HTMLElement;
  private modal: HTMLElement;
  constructor() {
    this.buttonOpen = document.querySelector('.new') as HTMLElement;
    this.buttonClose = document.querySelector('.cancel') as HTMLElement;
    this.modal = document.querySelector('.modal-overlay') as HTMLElement;
  }

  closeModal(): void {
    this.buttonClose.addEventListener('click', (event: MouseEvent): void => {
      event.preventDefault();
      this.modal.classList.remove('active');
    });
  }

  openModal(): void {
    this.buttonOpen.addEventListener('click', () => {
      this.modal.classList.add('active');
    });
  }
}
