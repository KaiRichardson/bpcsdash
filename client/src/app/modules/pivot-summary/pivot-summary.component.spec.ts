import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotSummaryComponent } from './pivot-summary.component';

describe('PivotSummaryComponent', () => {
  let component: PivotSummaryComponent;
  let fixture: ComponentFixture<PivotSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PivotSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PivotSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
