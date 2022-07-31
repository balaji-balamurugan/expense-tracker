import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'et-form-add-income2',
  templateUrl: './form-add-income2.page.html',
  styleUrls: ['./form-add-income2.page.scss'],
})
export class FormAddIncome2Page implements OnInit {
  @ViewChild(IonDatetime) datetime!: IonDatetime;
  incomeForm: any;
  formattedString: any;
  dateValue: any;
  constructor() { }

  ngOnInit() {
    this.incomeForm = new FormGroup({
      date: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
    });
  }
  modalDateChanged(value: any) {
    this.dateValue = value;
    this.formattedString = format(parseISO(value), 'MMM d, yyyy');
  }

  async close() {
    await this.datetime.cancel(true);
  }

  async select() {
    await this.datetime.confirm(true);
  }
  submitForm() {
    console.log(this.incomeForm.value);
  }

}
