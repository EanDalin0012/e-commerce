import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Product1000Component } from './product1000.component';

describe('Product1000Component', () => {
  let component: Product1000Component;
  let fixture: ComponentFixture<Product1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product1000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
