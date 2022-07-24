import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatePickerComponent } from 'src/app/shared/components/date-picker/date-picker.component';

@Component({
  selector: 'et-add-goal',
  templateUrl: './add-goal.page.html',
  styleUrls: ['./add-goal.page.scss'],
})
export class AddGoalPage implements OnInit {
  constructor(public modalController: ModalController) { }

  ngOnInit() { }
  async date() {
    const modal = await this.modalController.create({
      component: DatePickerComponent,
    });
    return await modal.present();
  }
}
