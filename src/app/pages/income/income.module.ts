import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncomePageRoutingModule } from './income-routing.module';

import { IncomePage } from './income.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IncomePageRoutingModule
  ],
  declarations: [IncomePage]
})
export class IncomePageModule { }
