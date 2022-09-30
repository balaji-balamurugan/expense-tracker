import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { goalsPath } from 'src/app/shared/constants/firepath.constant';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'et-add-goal',
  templateUrl: './add-goal.page.html',
  styleUrls: ['./add-goal.page.scss'],
})
export class AddGoalPage {
  goalForm = this.fb.group({
    name: this.fb.control('New car'),
    amount: this.fb.control(0),
    period: this.fb.control('yearly'),
    date: this.fb.control(format(new Date(), 'MMM d, yyyy')),
  });

  constructor(
    public modalController: ModalController,
    private fb: NonNullableFormBuilder,
    private firestore: FirestoreService
  ) { }

  modalDateChanged(value: string | string[] | null | undefined) {
    this.goalForm.get('date')?.patchValue(format(parseISO(value as string), 'MMM d, yyyy'));
  }

  async addGoal() {
    if (this.goalForm.status === 'INVALID') {
      return;
    }
    await this.firestore.add(goalsPath, this.goalForm.value);
    this.modalController.dismiss();
  }

}
