import { Component, OnInit } from '@angular/core';
import { Product } from '../../share/map-model/model/product';
import { data } from './data';
import { DataService } from '../../share/services/data.service';

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
  constructor(
    private dataService:DataService) { }

  ngOnInit(): void {
    this.productList = data;
  }

  plus(product:Product) {
    if (product) {
      this.productList.forEach(element => {
        if(element.id === product.id) {
          console.log(element.id);
          if(element.qty) {
            element.qty += 1;
          } else {
            element.qty = 1;
          }
        }
      });
    }
  }

  minus(product:Product) {
    if (product) {
      this.productList.forEach(element => {
        if(element.id === product.id) {
          console.log(element.id);
          if(element.qty) {
            element.qty -= 1;
          } else {
            element.qty = 0;
          }
        }
      });
    }
  }

  addCart(product: Product) {
    console.log(product);
    if(!product.qty) {
      this.showIncreaseMessage('please increas qty');
      return;
    }
    this.dataService.cartDataSource(product);
  }

  showIncreaseMessage(text:string) {
    console.log(text);
  }
}
