import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'et-entries-view',
  template: `
    <ion-item>
      <ion-icon name="fast-food-outline" slot="start" size="small"></ion-icon>
      <ion-label>
        <h6>
          <b>{{name}}</b>
        </h6>
        <p>{{date}}</p>
      </ion-label>
      <ion-text class="ion-text-end" slot="end">
        <p>
          <ion-text color="dark">-$200 + Vat 1%</ion-text>
        </p>
        <small>
          <ion-text color="medium"> {{paymentMethod}} </ion-text>
        </small>
      </ion-text>
    </ion-item>
  `,
  styles: [
    `
    h6{
      font-size:14px;
    }
    p{
      font-size: 13px;
    }`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntriesViewComponent {

  @Input()
  name!: string;

  @Input()
  date!: string;

  @Input()
  paymentMethod!: string;
}

