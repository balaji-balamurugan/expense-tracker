import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'et-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    ismyTextFieldType: boolean;

    constructor() { }

    ngOnInit() { }

    togglePassword() {
        this.ismyTextFieldType = !this.ismyTextFieldType;
    }
}
