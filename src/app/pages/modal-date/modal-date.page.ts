import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'et-modal-date',
    templateUrl: './modal-date.page.html',
    styleUrls: ['./modal-date.page.scss'],
})
export class ModalDatePage {
    date = new FormControl<any>('');

    constructor(public modalController: ModalController) { }

    dismiss() {
        this.modalController.dismiss({
            data: this.date.value,
            dismissed: true,
        });
    }
}
