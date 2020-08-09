import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Product4000Component } from './product4000.component';

describe('Product4000Component', () => {
  let component: Product4000Component;
  let fixture: ComponentFixture<Product4000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product4000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product4000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
