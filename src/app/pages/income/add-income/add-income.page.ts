import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { DatePickerComponent } from 'src/app/shared/components/date-picker/date-picker.component';

@Component({
  selector: 'et-add-income',
  templateUrl: './add-income.page.html',
  styleUrls: ['./add-income.page.scss'],
})
export class AddIncomePage implements OnInit {
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
}
