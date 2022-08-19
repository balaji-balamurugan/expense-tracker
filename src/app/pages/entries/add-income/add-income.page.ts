/* eslint-disable no-underscore-dangle */
import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
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

  incomeForm: FormGroup<{
    date: FormControl<Date | string | null>;
    title: FormControl<string>;
    amount: FormControl<number | null>;
  }>;

  constructor(
    public modalController: ModalController,
    private fb: NonNullableFormBuilder,
    private _firestore: FirestoreService
  ) {
    this.incomeForm = this.fb.group({
      date: this.fb.control(
        null, Validators.required
      ) as FormControl<Date | string | null>,
      title: this.fb.control('', Validators.required),
      amount: this.fb.control(null, Validators.required) as FormControl<number | null>,
    });

    this.incomeForm.get('date')?.valueChanges
      .subscribe((date) => {
        // this.incomeForm.get('date')?.setValue(
        //   new Date(date as string) as Date,
        //   { emitEvent: false }
        // );
      });
  }

  async submitForm() {
    if (this.incomeForm.status === 'INVALID') {
      return;
    }
    await this._firestore.add(incomePath, this.incomeForm.value);
    this.modalController.dismiss();
  }

}
