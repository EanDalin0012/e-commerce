import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home5000Component } from './home5000.component';

describe('Home5000Component', () => {
  let component: Home5000Component;
  let fixture: ComponentFixture<Home5000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home5000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home5000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
