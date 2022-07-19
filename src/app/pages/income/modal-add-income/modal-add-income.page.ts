import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalDatePage } from '../../modal-date/modal-date.page';

@Component({
  selector: 'app-modal-add-income',
  templateUrl: './modal-add-income.page.html',
  styleUrls: ['./modal-add-income.page.scss'],
})
export class ModalAddIncomePage implements OnInit {
  incomeForm: FormGroup;
  constructor(
    public modalController: ModalController,
    private fb: NonNullableFormBuilder
  ) {}

  ngOnInit() {
    this.incomeForm = this.fb.group({
      title: this.fb.control(''),
      amount: this.fb.control(null),
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
      component: ModalDatePage,
    });
    return await modal.present();
  }
}
