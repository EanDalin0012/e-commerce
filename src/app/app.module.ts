import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutBlankComponent } from './layout/layout-blank/layout-blank.component';
import { MLayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout/layout.component';
import { SBSharedModule } from './share/sbshare.module';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { IconsModule } from '@progress/kendo-angular-icons';
import { LabelModule } from '@progress/kendo-angular-label';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { MenuModule } from '@progress/kendo-angular-menu';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';







export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutBlankComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SBSharedModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
    }),
    NavigationModule,
    IconsModule,
    LabelModule,
    IndicatorsModule,
    MenuModule,
    ScrollViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
