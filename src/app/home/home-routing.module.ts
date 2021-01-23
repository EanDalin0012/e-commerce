import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home1000Component } from './home1000/home1000.component';
import { Home2000Component } from './home2000/home2000.component';

const routes: Routes = [
  {path: 'home200', component: Home1000Component},
  {path: '', component: Home2000Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
