import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EntriesViewComponent } from './entries-view.component';

describe('EntriesViewComponent', () => {
  let component: EntriesViewComponent;
  let fixture: ComponentFixture<EntriesViewComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    fixture = TestBed.createComponent(EntriesViewComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should emit event on item clicked', () => {
    const mySpy = spyOn(component.entryClicked, 'emit').and.callThrough();
    const hostItem = debugElement.query(
      By.css('[data-testid="entry-item"]')
    );
    hostItem.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(mySpy).toHaveBeenCalled();
    expect(mySpy).toHaveBeenCalledTimes(1);
  });

  it('should display the date correctly', () => {
    component.date = '26/07/2999';
    const dateElement = debugElement.query(
      By.css('[data-testid="entry-date"]')
    );
    fixture.detectChanges();
    expect(dateElement.nativeElement?.textContent).toBe('26/07/2999');
  });

  it('should display the name correctly', () => {
    component.name = 'Food';
    const nameElement = debugElement.query(
      By.css('[data-testid="entry-name"]')
    );
    fixture.detectChanges();
    expect(nameElement.nativeElement?.textContent).toBe('Food');
  });

  it('should display the payment correctly', () => {
    component.paymentMethod = 'cash';
    const paymentElement = debugElement.query(
      By.css('[data-testid="entry-payment"]')
    );
    fixture.detectChanges();
    expect(paymentElement.nativeElement?.textContent).toBe('cash');
  });
});
