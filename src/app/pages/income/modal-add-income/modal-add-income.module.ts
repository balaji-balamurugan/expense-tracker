import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAddIncomePageRoutingModule } from './modal-add-income-routing.module';

import { ModalAddIncomePage } from './modal-add-income.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAddIncomePageRoutingModule
  ],
  declarations: [ModalAddIncomePage]
})
export class ModalAddIncomePageModule {}
