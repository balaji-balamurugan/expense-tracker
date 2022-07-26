import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestDatePageRoutingModule } from './test-date-routing.module';

import { TestDatePage } from './test-date.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestDatePageRoutingModule
  ],
  declarations: [TestDatePage]
})
export class TestDatePageModule {}
