import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutBlankComponent } from './layout-blank/layout-blank.component';



@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    LayoutComponent, 
    LayoutBlankComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
