import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Profile1000Component } from './profile1000.component';

describe('Profile1000Component', () => {
  let component: Profile1000Component;
  let fixture: ComponentFixture<Profile1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Profile1000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Profile1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
