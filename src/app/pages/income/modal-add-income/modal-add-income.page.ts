import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalDatePage } from '../../modal-date/modal-date.page';

@Component({
    selector: 'et-modal-add-income',
    templateUrl: './modal-add-income.page.html',
    styleUrls: ['./modal-add-income.page.scss'],
})
export class ModalAddIncomePage implements OnInit {
    incomeForm: FormGroup;
    constructor(
        public modalController: ModalController,
        // private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.incomeForm = new FormGroup({
            title: new FormControl(''),
            amount: new FormControl(null),
        });
    }

    income() {
        console.log(this.incomeForm.value);
    }

    dismiss() {
        this.modalController.dismiss({
            dismissed: true,
        });
    }

    async date() {
        const modal = await this.modalController.create({
            component: ModalDatePage,
        });
        return await modal.present();
    }
}
