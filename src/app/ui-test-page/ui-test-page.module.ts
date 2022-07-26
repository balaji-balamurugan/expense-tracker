import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UiTestPagePageRoutingModule } from './ui-test-page-routing.module';

import { UiTestPagePage } from './ui-test-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UiTestPagePageRoutingModule
  ],
  declarations: [UiTestPagePage]
})
export class UiTestPagePageModule {}
