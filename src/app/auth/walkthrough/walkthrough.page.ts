import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.page.html',
  styleUrls: ['./walkthrough.page.scss'],
})
export class WalkthroughPage implements OnInit {
  @ViewChild('swiper') swiper: SwiperComponent;

  constructor() {}

  ngOnInit() {}
}
