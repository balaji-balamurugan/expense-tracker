/* eslint-disable no-underscore-dangle */
import { Component } from '@angular/core';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { incomePath } from 'src/app/shared/constants/firepath.constant';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'et-add-income',
  templateUrl: './add-income.page.html',
  styleUrls: ['./add-income.page.scss'],
})
export class AddIncomePage {

  customActionSheetOptions = {
    header: 'Colors',
    subHeader: 'Select your favorite color',
  };

  incomeForm = this.fb.group({
    date: this.fb.control(
      null, Validators.required
    ) as FormControl<Date | string | null>,
    title: this.fb.control('', Validators.required),
    amount: this.fb.control(null, Validators.required) as FormControl<number | null>,
  });

  constructor(
    public modalController: ModalController,
    private fb: NonNullableFormBuilder,
    private firestore: FirestoreService
  ) { }

  async addIncome() {
    if (this.incomeForm.status === 'INVALID') {
      return;
    }
    await this.firestore.add(incomePath, this.incomeForm.value);
    this.modalController.dismiss();
  }

}
