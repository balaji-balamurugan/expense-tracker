import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EntriesViewComponentModule } from 'src/app/shared/components/entries-view/entries-view.module';
import { AddEntriesPage } from './add-entries.page';

const routes: Routes = [
  {
    path: '',
    component: AddEntriesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    EntriesViewComponentModule
  ],
  declarations: [AddEntriesPage],
})
export class AddEntriesPageModule { }
