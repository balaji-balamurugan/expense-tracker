import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { DatePickerComponent } from 'src/app/shared/components/date-picker/date-picker.component';

@Component({
  selector: 'et-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
})
export class AddExpensePage implements OnInit {
  expenseForm: FormGroup;
  showDatePicker = false;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.expenseForm = new FormGroup({
      date: new FormControl(''),
      title: new FormControl(''),
      amount: new FormControl(null),
    });
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
    console.log(data);
    if (data) {
      this.expenseForm.get('date').setValue(data?.data);
    }
  }
}
