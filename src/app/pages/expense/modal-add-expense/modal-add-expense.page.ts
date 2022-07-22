import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalDatePage } from '../../modal-date/modal-date.page';

@Component({
  selector: 'app-modal-add-expense',
  templateUrl: './modal-add-expense.page.html',
  styleUrls: ['./modal-add-expense.page.scss'],
})
export class ModalAddExpensePage implements OnInit {
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
      component: ModalDatePage,
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.expenseForm.get('date').setValue(data?.data);
    }
  }
}
