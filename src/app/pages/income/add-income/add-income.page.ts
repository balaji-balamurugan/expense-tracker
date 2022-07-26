import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IonDatetime, ModalController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { DatePickerComponent } from 'src/app/shared/components/date-picker/date-picker.component';

@Component({
  selector: 'et-add-income',
  templateUrl: './add-income.page.html',
  styleUrls: ['./add-income.page.scss'],
})
export class AddIncomePage implements OnInit {
  @ViewChild(IonDatetime) datetime: IonDatetime;
  dateValue: any;
  formattedString: any;
  incomeForm: FormGroup;

  constructor(
    public modalController: ModalController,
    // private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.incomeForm = new FormGroup({
      title: new FormControl(''),
      amount: new FormControl(null),
    });
  }

  income() {
    console.log(this.incomeForm.value);
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  async date() {
    const modal = await this.modalController.create({
      component: DatePickerComponent,
    });
    return await modal.present();
  }

  modalDateChanged(value) {
    this.dateValue = value;
    this.formattedString = format(parseISO(value), 'HH:mm, MMM d, yyyy');
  }


  async select() {
    await this.datetime.confirm(true);
  }
}
