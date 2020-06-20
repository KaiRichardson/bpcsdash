import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotHistoryComponent } from './pivot-history.component';

describe('PivotHistoryComponent', () => {
  let component: PivotHistoryComponent;
  let fixture: ComponentFixture<PivotHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PivotHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PivotHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
