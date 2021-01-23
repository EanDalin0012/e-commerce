import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Product5000Component } from './product5000.component';

describe('Product5000Component', () => {
  let component: Product5000Component;
  let fixture: ComponentFixture<Product5000Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Product5000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product5000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
