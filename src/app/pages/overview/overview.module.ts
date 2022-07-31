import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EntriesViewComponentModule } from 'src/app/shared/components/entries-view/entries-view.module';
import { SwiperModule } from 'swiper/angular';
import { OverviewPage } from './overview.page';

const routes: Routes = [
  {
    path: '',
    component: OverviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    EntriesViewComponentModule
  ],
  declarations: [OverviewPage],
})
export class OverviewPageModule { }
