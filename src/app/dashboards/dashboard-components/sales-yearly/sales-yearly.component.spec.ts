import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesYearlyComponent } from './sales-yearly.component';

describe('SalesYearlyComponent', () => {
  let component: SalesYearlyComponent;
  let fixture: ComponentFixture<SalesYearlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesYearlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesYearlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
