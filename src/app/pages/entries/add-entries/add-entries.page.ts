import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SwiperComponent } from 'swiper/angular';
import { AddExpensePage } from '../../expense/add-expense/add-expense.page';
import { AddIncomePage } from '../../income/add-income/add-income.page';
// SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'et-add-entries',
  templateUrl: './add-entries.page.html',
  styleUrls: ['./add-entries.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEntriesPage {
  @ViewChild('swiper') swiper: SwiperComponent;

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
}
