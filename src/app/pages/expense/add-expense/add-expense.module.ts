import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalAddExpensePage } from './add-expense.page';

const routes: Routes = [
    {
        path: '',
        component: ModalAddExpensePage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
    ],
    declarations: [ModalAddExpensePage],
})
export class ModalAddExpensePageModule { }
