import { ModalController } from './controller/ModalController';
import { TransactionController } from './controller/TransactionController';
import { Transaction } from './models/Transaction';
import { ModalView } from './view/ModalView';

const transaction = new Transaction();
const transactionController = new TransactionController(transaction);
const modalView = new ModalView();
const modalController = new ModalController(modalView);

modalController.open();
modalController.close();
transactionController.store();
