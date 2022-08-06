import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SwiperComponent } from 'swiper/angular';
import { AddExpensePage } from '../add-expense/add-expense.page';
import { AddGoalPage } from '../add-goal/add-goal.page';
import { AddIncomePage } from '../add-income/add-income.page';
// SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'et-add-entries',
  templateUrl: './add-entries.page.html',
  styleUrls: ['./add-entries.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEntriesPage {
  @ViewChild('swiper') swiper!: SwiperComponent;

  constructor(public modalController: ModalController) { }

  async addIncome() {
    const modal = await this.modalController.create({
      component: AddIncomePage,
    });
    return await modal.present();
  }

  async addExpense() {
    const modal = await this.modalController.create({
      component: AddExpensePage,
    });
    return await modal.present();
  }

  async addGoal() {
    const modal = await this.modalController.create({
      component: AddGoalPage,
    });
    return await modal.present();
  }
}
