import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE } from './share/constants/common.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';
  constructor(
    private translate: TranslateService,
  ) {
    this.translate.setDefaultLang( LANGUAGE.I18N_EN.toString() );
    this.translate.use( LANGUAGE.I18N_EN.toString() );
  }
  
}
