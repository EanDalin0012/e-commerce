import { Component, OnInit } from '@angular/core';
import { Product } from '../../share/map-model/model/product';
import { data } from './data';

@Component({
  selector: 'app-home2000',
  templateUrl: './home2000.component.html',
  styleUrls: ['./home2000.component.css']
})

export class Home2000Component implements OnInit {
  imageSrc= 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/examples/card/display_media/black_sea.jpg';
  productList = new Array<Product>();
  public chips = [
    {
      label: 'Apple',
      selected: false,
      removable: true
  },
  {
      label: 'Strawberry',
      selected: false,
      removable: true
  },
];
  constructor() { }

  ngOnInit(): void {
    this.productList = data;
  }

}
