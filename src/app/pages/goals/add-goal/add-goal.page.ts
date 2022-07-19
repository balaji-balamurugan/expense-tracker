import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalDatePage } from '../../modal-date/modal-date.page';

@Component({
    selector: 'app-add-goal',
    templateUrl: './add-goal.page.html',
    styleUrls: ['./add-goal.page.scss'],
})
export class AddGoalPage implements OnInit {
    constructor(public modalController: ModalController) { }

    ngOnInit() { }
    async date() {
        const modal = await this.modalController.create({
            component: ModalDatePage,
        });
        return await modal.present();
    }
}
