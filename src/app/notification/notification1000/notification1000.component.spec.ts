import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Notification1000Component } from './notification1000.component';

describe('Notification1000Component', () => {
  let component: Notification1000Component;
  let fixture: ComponentFixture<Notification1000Component>;

  beforeEach(waitForAsync(() => {
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
