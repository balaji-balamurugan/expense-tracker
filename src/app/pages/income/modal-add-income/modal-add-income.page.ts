import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalDatePage } from '../../modal-date/modal-date.page';

@Component({
  selector: 'app-modal-add-income',
  templateUrl: './modal-add-income.page.html',
  styleUrls: ['./modal-add-income.page.scss'],
})
export class ModalAddIncomePage implements OnInit {
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
