import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SideNavRightComponent } from './side-nav-right.component';

describe('SideNavRightComponent', () => {
  let component: SideNavRightComponent;
  let fixture: ComponentFixture<SideNavRightComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
