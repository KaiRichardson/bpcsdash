import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePivotsComponent } from './active-pivots.component';

describe('ActivePivotsComponent', () => {
  let component: ActivePivotsComponent;
  let fixture: ComponentFixture<ActivePivotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivePivotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivePivotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
