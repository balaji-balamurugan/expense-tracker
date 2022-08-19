import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'et-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
})
export class AddExpensePage {
  expenseForm!: FormGroup;

  constructor(
    private fb: NonNullableFormBuilder,
    public modalController: ModalController,
  ) {
    this.expenseForm = this.fb.group({
      date: this.fb.control(''),
      title: this.fb.control(''),
      amount: this.fb.control(null),
    });

    this.expenseForm.get('date')?.valueChanges
      .subscribe((date) => {
        // this.expenseForm.get('date')?.setValue(
        //   new Date(date as string) as Date,
        //   { emitEvent: false }
        // );
      });
  }

  expense() {
    console.log(this.expenseForm.value);
  }

}
