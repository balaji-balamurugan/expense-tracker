import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'et-test-date',
  templateUrl: './test-date.page.html',
  styleUrls: ['./test-date.page.scss'],
})
export class TestDatePage implements OnInit {

  @ViewChild(IonDatetime) datetime: IonDatetime;
  dateValue: any;
  formattedString: any;

  constructor() { }

  ngOnInit() { }

  modalDateChanged(value) {
    this.dateValue = value;
    this.formattedString = format(parseISO(value), 'HH:mm, MMM d, yyyy');
  }


  async select() {
    await this.datetime.confirm(true);
  }
}
