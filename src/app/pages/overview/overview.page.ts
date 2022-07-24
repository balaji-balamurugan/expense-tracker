import { Component, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// SwiperCore.use([Pagination, Autoplay]);

@Component({
    selector: 'et-overview',
    templateUrl: './overview.page.html',
    styleUrls: ['./overview.page.scss'],
})
export class OverviewPage {
    @ViewChild('swiper') swiper: SwiperComponent;
}
