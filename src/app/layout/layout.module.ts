import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SBSharedModule } from '../share/sbshare.module';
import { SideNavRightComponent } from './side-nav-right/side-nav-right.component';



@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SideNavComponent, 
    SideNavRightComponent
  ],
  imports: [
    CommonModule,
    SBSharedModule
  ],
  exports: [
    HeaderComponent, 
    FooterComponent,
    SideNavComponent,
    SideNavRightComponent
  ]
})
export class MLayoutModule { }
