import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home2000Component } from './home2000/home2000.component';
import { Home3000Component } from './home3000/home3000.component';
import { Home4000Component } from './home4000/home4000.component';
import { Home5000Component } from './home5000/home5000.component';



@NgModule({
  declarations: [Home2000Component, Home3000Component, Home4000Component, Home5000Component],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
