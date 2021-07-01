import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCard2Component } from './top-card2.component';

describe('TopCard2Component', () => {
  let component: TopCard2Component;
  let fixture: ComponentFixture<TopCard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
