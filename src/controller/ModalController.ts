import { IModalView } from '../view/interfaces/IModalView';

export class ModalController {
  private modalView: IModalView;

  constructor(modalView: IModalView) {
    this.modalView = modalView;
  }

  open(): void {
    this.modalView.openModal();
  }

  close(): void {
    this.modalView.closeModal();
  }
}
