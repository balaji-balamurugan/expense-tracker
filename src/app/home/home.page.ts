import { AfterContentChecked, Component, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
SwiperCore.use([Pagination, Autoplay]);
// SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('swiper') swiper: SwiperComponent;

  constructor() {}
  // ngAfterContentChecked(): void {
  //   if (this.swiper) {
  //     this.swiper.updateSwiper({});
  //   }
  // }
}
