import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalDatePage } from '../../modal-date/modal-date.page';

@Component({
  selector: 'app-modal-add-expense',
  templateUrl: './modal-add-expense.page.html',
  styleUrls: ['./modal-add-expense.page.scss'],
})
export class ModalAddExpensePage implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
  async date() {
    const modal = await this.modalController.create({
      component: ModalDatePage,
    });
    return await modal.present();
  }
}
