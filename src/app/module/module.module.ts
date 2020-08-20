import { NgModule } from '@angular/core';
import { RoutingModule } from './module-routing.module';
import { HomeComponent } from '../home/home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    // CommonModule,
    RoutingModule
  ]
})
export class Modules {
  constructor() {
    console.log('MModule');
  }
 }
