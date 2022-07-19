import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { ModalAddExpensePage } from '../expense/modal-add-expense/modal-add-expense.page';
import { ModalAddIncomePage } from '../income/modal-add-income/modal-add-income.page';
SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  @ViewChild('swiper') swiper: SwiperComponent;
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  async addIncome() {
    const modal = await this.modalController.create({
      component: ModalAddIncomePage,
    });
    return await modal.present();

  }

  async addExpense() {
    const modal = await this.modalController.create({
      component: ModalAddExpensePage,
    });
    return await modal.present();
  }
}
