import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product1000Component } from './product1000/product1000.component';
import { Product2000Component } from './product2000/product2000.component';
import { Product3000Component } from './product3000/product3000.component';
import { Product4000Component } from './product4000/product4000.component';
import { Product5000Component } from './product5000/product5000.component';



@NgModule({
  declarations: [Product1000Component, Product2000Component, Product3000Component, Product4000Component, Product5000Component],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
