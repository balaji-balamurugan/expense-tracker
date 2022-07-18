import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-date',
  templateUrl: './modal-date.page.html',
  styleUrls: ['./modal-date.page.scss'],
})
export class ModalDatePage implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
