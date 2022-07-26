import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { DatePickerComponent } from 'src/app/shared/components/date-picker/date-picker.component';
@Component({
  selector: 'et-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
})
export class AddExpensePage implements OnInit {
  expenseForm!: FormGroup;
  showDatePicker = false;

  formattedString: any;
  dateValue: any;
  datetime: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.expenseForm = new FormGroup({
      date: new FormControl(''),
      title: new FormControl(''),
      amount: new FormControl(null),
    });
  }

  modalDateChanged(value: any) {
    this.dateValue = value;
    this.formattedString = format(parseISO(value), 'MMM d, yyyy');
  }

  expense() {
    console.log(this.expenseForm.value);
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
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      // this.expenseForm.get('date').setValue(data?.data);
    }
  }
}
