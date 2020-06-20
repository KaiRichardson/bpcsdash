import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotLogComponent } from './pivot-log.component';

describe('PivotLogComponent', () => {
  let component: PivotLogComponent;
  let fixture: ComponentFixture<PivotLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PivotLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PivotLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
