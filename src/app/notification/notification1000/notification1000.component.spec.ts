import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Notification1000Component } from './notification1000.component';

describe('Notification1000Component', () => {
  let component: Notification1000Component;
  let fixture: ComponentFixture<Notification1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Notification1000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Notification1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
