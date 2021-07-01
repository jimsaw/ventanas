import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcaldiaComponent } from './alcaldia.component';

describe('AlcaldiaComponent', () => {
  let component: AlcaldiaComponent;
  let fixture: ComponentFixture<AlcaldiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlcaldiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcaldiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
