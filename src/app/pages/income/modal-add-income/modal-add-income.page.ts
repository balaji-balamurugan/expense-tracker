import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

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
}
