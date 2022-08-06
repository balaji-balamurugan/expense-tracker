import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'et-add-goal',
  templateUrl: './add-goal.page.html',
  styleUrls: ['./add-goal.page.scss'],
})
export class AddGoalPage {

  goalForm: FormGroup;

  constructor(
    public modalController: ModalController,
    private fb: NonNullableFormBuilder
  ) {
    this.goalForm = this.fb.group({
      name: this.fb.control('New car'),
      amount: this.fb.control(0),
      period: this.fb.control('yearly'),
      date: this.fb.control(''),
    });
  }

  modalDateChanged(value: string | string[] | null | undefined) {
    this.goalForm.get('date')?.patchValue(format(parseISO(value as string), 'MMM d, yyyy'));
  }

}
