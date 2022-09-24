import { IonicModule } from '@ionic/angular';
import { byTestId, createComponentFactory, Spectator } from '@ngneat/spectator';
import { EntriesViewComponent } from './entries-view.component';

describe('EntriesViewComponent', () => {
  let spectator: Spectator<EntriesViewComponent>;
  const createComponent = createComponentFactory({
    component: EntriesViewComponent,
    imports: [IonicModule.forRoot()]
  });

  beforeEach(() => spectator = createComponent());

  it('should display the date correctly', () => {
    spectator.setInput('date', '20/092/899');
    expect(spectator.query(byTestId('entry-date'))).toBeTruthy();
    expect(spectator.query(byTestId('entry-date'))).toHaveText('20/092/899');
  });

  it('should display the name correctly', () => {
    spectator.setInput('name', 'Food');
    expect(spectator.query(byTestId('entry-name'))).toBeTruthy();
    expect(spectator.query(byTestId('entry-name'))).toHaveText('Food');
  });

  it('should display the paymentMethod correctly', () => {
    spectator.setInput('paymentMethod', 'GooglePay');
    expect(spectator.query(byTestId('entry-payment'))).toBeTruthy();
    expect(spectator.query(byTestId('entry-payment'))).toHaveText('GooglePay');
  });

  it('should emit event on item clicked', () => {
    const spy = spyOn(spectator.component.entryClicked, 'emit');
    spectator.component.entryClicked.emit();
    expect(spy).toHaveBeenCalledTimes(1);
  });

});
