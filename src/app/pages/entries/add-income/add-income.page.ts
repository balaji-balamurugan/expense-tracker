import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'et-add-income',
  templateUrl: './add-income.page.html',
  styleUrls: ['./add-income.page.scss'],
})
export class AddIncomePage implements OnInit {

  incomeForm!: FormGroup;
  constructor(
    public modalController: ModalController,
    private fb: NonNullableFormBuilder
  ) { }

  ngOnInit() {
    this.incomeForm = this.fb.group({
      date: this.fb.control(format(new Date(), 'MMM d, yyyy'), Validators.required),
      title: this.fb.control('', Validators.required),
      amount: this.fb.control('', Validators.required),
    });
  }

  modalDateChanged(value: string | string[] | null | undefined) {
    this.incomeForm.get('date')?.patchValue(format(parseISO(value as string), 'MMM d, yyyy'));
  }

  submitForm() {
    console.log(this.incomeForm.value);
    this.modalController.dismiss();
  }

}
