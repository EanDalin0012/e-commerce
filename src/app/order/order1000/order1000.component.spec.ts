import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Order1000Component } from './order1000.component';

describe('Order1000Component', () => {
  let component: Order1000Component;
  let fixture: ComponentFixture<Order1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Order1000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Order1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
