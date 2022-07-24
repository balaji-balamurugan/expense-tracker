import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'et-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {
  date = new FormControl<any>('');

  constructor(public modalController: ModalController) { }

  dismiss() {
    this.modalController.dismiss({
      data: this.date.value,
      dismissed: true,
    });
  }

}
