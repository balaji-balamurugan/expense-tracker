import { Component, ViewChild } from '@angular/core';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Pagination, Autoplay]);
// SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);
@Component({
    selector: 'et-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    @ViewChild('swiper') swiper: SwiperComponent;

    constructor() { }
    // ngAfterContentChecked(): void {
    //   if (this.swiper) {
    //     this.swiper.updateSwiper({});
    //   }
    // }
}
