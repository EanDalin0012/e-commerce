import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DialogModule, DialogsModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule, SharedModule } from '@progress/kendo-angular-dropdowns';
import { GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { ModalComponent } from './component/modal/modal.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { InputsModule, TextBoxModule } from '@progress/kendo-angular-inputs';
import { UploadModule } from '@progress/kendo-angular-upload';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { IconModule } from '@progress/kendo-angular-icons';
import { LabelModule } from '@progress/kendo-angular-label';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { MenusModule } from '@progress/kendo-angular-menu';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';

@NgModule({
  declarations: [
  ModalComponent,
],
  imports: [
   CommonModule
  ],
  exports : [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    DialogModule,
    GridModule,
    LayoutModule,
    SharedModule,
    SortableModule,
    DropDownsModule,
    PDFModule,
    ButtonsModule,
    ChartsModule,
    DateInputsModule,
    DialogsModule,
    ExcelExportModule,
    PDFExportModule,
    SchedulerModule,
    NotificationModule,
    UploadModule,
    NavigationModule,

    IconModule,
    InputsModule,
    LabelModule,
    IndicatorsModule,
    TextBoxModule,
    MenusModule,
    ScrollViewModule,
    
  ],
  entryComponents: [
    ModalComponent,
  ],
  providers: [
    DatePipe,
  ]
})
export class SBSharedModule {
  static forRoot(): ModuleWithProviders<SBSharedModule> {
    return {
      ngModule: SBSharedModule,
      providers: []
    };
  }
 }
