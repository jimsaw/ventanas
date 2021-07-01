import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeExpenssComponent } from './income-expenss.component';

describe('IncomeExpenssComponent', () => {
  let component: IncomeExpenssComponent;
  let fixture: ComponentFixture<IncomeExpenssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeExpenssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeExpenssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
