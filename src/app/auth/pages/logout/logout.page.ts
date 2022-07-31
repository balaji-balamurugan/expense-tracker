/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  templateUrl: './logout.page.html',
})
export class LogoutPage implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    setTimeout(async () => {
      await this._authService.signOut();
      console.log('you are signed out!');
    }, 1200);
  }

}
