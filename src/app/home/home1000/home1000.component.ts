import { Component, OnInit } from '@angular/core';
import { Country, CountryData } from './data';
import { DropDownFilterSettings } from '@progress/kendo-angular-dropdowns';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home1000',
  templateUrl: './home1000.component.html',
  styleUrls: ['./home1000.component.css']
})
export class Home1000Component implements OnInit {

  public mediaCards: Array<any> = [
    {
        description: 'The Muppets Musical Gang is back at it with their rendition of Queen’s Bohemian Rhapsody!',
        actionButtons: [{ text: 'Add to favourites', flat: true, primary: true }],
        actionsLayout: 'start',
        videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/tgbNymZ7vqY')
    },
    {
        imageSrc: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/examples/card/display_media/black_sea.jpg',
        description: 'The Black Sea is bordered by Ukraine, Romania, Bulgaria, Turkey, Georgia, and Russia. It has a positive water balance; that is, a net outflow of water 300 km3 per year through the Bosphorus and the Dardanelles into the Aegean Sea. The Black Sea is bordered by Ukraine, Romania, Bulgaria, Turkey, Georgia, and Russia. It has a positive water balance; that is, a net outflow of water 300 km3 per year through the Bosphorus and the Dardanelles into the Aegean Sea.',
        actionButtons: [{ text: 'Read more', flat: true, primary: false }, { text: 'Add', flat: true, primary: true }],
        actionsLayout: 'start'
    },
    {
      imageSrc: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/examples/card/display_media/black_sea.jpg',
      description: 'The Black Sea is bordered by Ukraine, Romania, Bulgaria, Turkey, Georgia, and Russia. It has a positive water balance; that is, a net outflow of water 300 km3 per year through the Bosphorus and the Dardanelles into the Aegean Sea.',
      actionButtons: [{ text: 'Read more', flat: true, primary: false }, { text: 'Add', flat: true, primary: true }],
      actionsLayout: 'start'
  },
  {
    description: 'The Muppets Musical Gang is back at it with their rendition of Queen’s Bohemian Rhapsody!',
    actionButtons: [{ text: 'Add to favourites', flat: true, primary: true }],
    actionsLayout: 'start',
    videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/tgbNymZ7vqY')
  },
  {
    imageSrc: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/examples/card/display_media/black_sea.jpg',
    description: 'The Black Sea is bordered by Ukraine, Romania, Bulgaria, Turkey, Georgia, and Russia. It has a positive water balance; that is, a net outflow of water 300 km3 per year through the Bosphorus and the Dardanelles into the Aegean Sea.',
    actionButtons: [{ text: 'Read more', flat: true, primary: false }, { text: 'Add', flat: true, primary: true }],
    actionsLayout: 'start'
  },
  {
    imageSrc: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/examples/card/display_media/black_sea.jpg',
    description: 'The Black Sea is bordered by Ukraine, Romania, Bulgaria, Turkey, Georgia, and Russia. It has a positive water balance; that is, a net outflow of water 300 km3 per year through the Bosphorus and the Dardanelles into the Aegean Sea.',
    actionButtons: [{ text: 'Read more', flat: true, primary: false }, { text: 'Add', flat: true, primary: true }],
    actionsLayout: 'start'
  },
  {
    description: 'The Muppets Musical Gang is back at it with their rendition of Queen’s Bohemian Rhapsody!',
    actionButtons: [{ text: 'Add to favourites', flat: true, primary: true }],
    actionsLayout: 'start',
    videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/tgbNymZ7vqY')
},
{
    imageSrc: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/examples/card/display_media/black_sea.jpg',
    description: 'The Black Sea is bordered by Ukraine, Romania, Bulgaria, Turkey, Georgia, and Russia. It has a positive water balance; that is, a net outflow of water 300 km3 per year through the Bosphorus and the Dardanelles into the Aegean Sea. The Black Sea is bordered by Ukraine, Romania, Bulgaria, Turkey, Georgia, and Russia. It has a positive water balance; that is, a net outflow of water 300 km3 per year through the Bosphorus and the Dardanelles into the Aegean Sea.',
    actionButtons: [{ text: 'Read more', flat: true, primary: false }, { text: 'Add', flat: true, primary: true }],
    actionsLayout: 'start'
},
{
  imageSrc: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/examples/card/display_media/black_sea.jpg',
  description: 'The Black Sea is bordered by Ukraine, Romania, Bulgaria, Turkey, Georgia, and Russia. It has a positive water balance; that is, a net outflow of water 300 km3 per year through the Bosphorus and the Dardanelles into the Aegean Sea.',
  actionButtons: [{ text: 'Read more', flat: true, primary: false }, { text: 'Add', flat: true, primary: true }],
  actionsLayout: 'start'
},
{
description: 'The Muppets Musical Gang is back at it with their rendition of Queen’s Bohemian Rhapsody!',
actionButtons: [{ text: 'Add to favourites', flat: true, primary: true }],
actionsLayout: 'start',
videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/tgbNymZ7vqY')
},
{
imageSrc: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/examples/card/display_media/black_sea.jpg',
description: 'The Black Sea is bordered by Ukraine, Romania, Bulgaria, Turkey, Georgia, and Russia. It has a positive water balance; that is, a net outflow of water 300 km3 per year through the Bosphorus and the Dardanelles into the Aegean Sea.',
actionButtons: [{ text: 'Read more', flat: true, primary: false }, { text: 'Add', flat: true, primary: true }],
actionsLayout: 'start'
},
{
imageSrc: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/examples/card/display_media/black_sea.jpg',
description: 'The Black Sea is bordered by Ukraine, Romania, Bulgaria, Turkey, Georgia, and Russia. It has a positive water balance; that is, a net outflow of water 300 km3 per year through the Bosphorus and the Dardanelles into the Aegean Sea.',
actionButtons: [{ text: 'Read more', flat: true, primary: false }, { text: 'Add', flat: true, primary: true }],
actionsLayout: 'start'
}
];

  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit() {
  }

}
