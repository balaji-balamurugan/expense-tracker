import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { expensePath } from 'src/app/shared/constants/firepath.constant';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'et-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
})
export class AddExpensePage {
  expenseForm = this.fb.group({
    date: this.fb.control(''),
    title: this.fb.control(''),
    amount: this.fb.control(null),
  });

  constructor(
    private fb: NonNullableFormBuilder,
    public modalController: ModalController,
    private firestore: FirestoreService,
  ) {
    this.expenseForm.get('date')?.valueChanges.subscribe(console.log);
  }

  async addExpense() {
    if (this.expenseForm.status === 'INVALID') {
      return;
    }
    await this.firestore.add(expensePath, this.expenseForm.value);
    this.modalController.dismiss();
  }

}
