import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutBlankComponent } from './layout/layout-blank/layout-blank.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { UploadModule } from '@progress/kendo-angular-upload';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MLayoutModule } from './layout/layout.module';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

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
    SortableModule,
    PDFExportModule,
    SchedulerModule,
    NotificationModule,
    UploadModule,
    HttpClientModule,
    DropDownsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
