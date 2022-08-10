import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
@Component({
  selector: 'et-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
})
export class AddExpensePage implements OnInit {
  expenseForm!: FormGroup;

  constructor(
    private fb: NonNullableFormBuilder,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    this.expenseForm = this.fb.group({
      date: this.fb.control(''),
      title: this.fb.control(''),
      amount: this.fb.control(null),
    });
  }

  modalDateChanged(value: string | string[] | null | undefined) {
    this.expenseForm.get('date')?.patchValue(format(parseISO(value as string), 'MMM d, yyyy'));
  }

  expense() {
    console.log(this.expenseForm.value);
  }

}
