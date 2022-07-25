import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'et-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {
  constructor(public modalController: ModalController) { }
  dismiss() {
    this.modalController.dismiss({
      data: '',
      dismissed: true,
    });
  }
}
