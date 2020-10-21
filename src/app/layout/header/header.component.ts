import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../share/services/data.service';
import { Product } from '../../share/map-model/model/product';
import { element } from 'protractor';
const items: any[] = [
  {
      text: 'Item1',
      items: [{ text: 'Item 1.1' }, { text: 'Item 1.2', items: [{ text: 'Item 1.2.1' }, { text: 'Item 1.2.2' }] }]
  },
  {
      text: 'Item2',
      items: [{ text: 'Item 2.1' }, { text: 'Item 2.2' }, { text: 'Item 2.3' }]
  },
  {
      text: 'Item3'
  }
];


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('anchor', { static: false })
  public anchor: ElementRef<HTMLElement>;
  public kendokaAvatar = 'https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png';

    public margin = { horizontal: -46, vertical: 7 };
    show = false;
    public items: any[] = items;
    
    totalCartCounter = 0;
    productList = new Array<Product>();

  constructor(
    private zone: NgZone,
    private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.cartData.subscribe( message=> {
      console.log('message', message);
      if(message) {
        this.productList.push(message);
        console.log(this.productList);
        if(this.productList.length > 0) {
          this.productList.forEach(element => {
            // if(element.id != message.id) {
            //   this.totalCartCounter +=1;
            // }
          });
        }
        if(this.productList.length === 1 ) {
          this.totalCartCounter = 1;
        }
      }
      
    });
  }

  public onToggle(): void {
    this.show = !this.show;
}
public ngAfterViewInit(): void {
  this.zone.runOutsideAngular(() => {
      window.addEventListener('resize', () => {
          if (this.show) {
              this.zone.run(() => this.onToggle());
          }
      });
  });
}

}


