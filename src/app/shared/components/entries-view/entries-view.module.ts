import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EntriesViewComponent } from './entries-view.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule,],
  declarations: [EntriesViewComponent],
  exports: [EntriesViewComponent]
})
export class EntriesViewComponentModule { }
