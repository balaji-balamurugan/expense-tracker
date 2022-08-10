import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddExpensePage } from '../add-expense/add-expense.page';
import { AddIncomePage } from '../add-income/add-income.page';
import { AddGoalPage } from './../add-goal/add-goal.page';

@Component({
  selector: 'et-add-entries',
  templateUrl: './add-entries.page.html',
  styleUrls: ['./add-entries.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEntriesPage {

  constructor(public modalController: ModalController) { }

  async addExpense() {
    const modal = await this.modalController.create({
      component: AddExpensePage,
    });
    return await modal.present();
  }

  async addIncome() {
    const modal = await this.modalController.create({
      component: AddIncomePage,
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
