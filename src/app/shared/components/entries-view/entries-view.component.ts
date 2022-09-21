import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'et-entries-view',
  template: `
    <ion-item (click)="entryClicked.emit()" data-testid="entry-item">
      <ion-icon name="fast-food-outline" slot="start" size="small"></ion-icon>
      <ion-label>
        <h6>
          <b data-testid="entry-name">{{name}}</b>
        </h6>
        <p data-testid="entry-date">{{date}}</p>
      </ion-label>
      <ion-text class="ion-text-end" slot="end">
        <p>
          <ion-text color="dark">-$200 + Vat 1%</ion-text>
        </p>
        <small>
          <ion-text color="medium" data-testid="entry-payment">{{paymentMethod}}</ion-text>
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
  date!: Date;

  @Input()
  paymentMethod!: string;

  @Output()
  entryClicked = new EventEmitter<void>();
}

