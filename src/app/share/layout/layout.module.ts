import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaautoComponent } from './menu/menucontent/galleriaauto/galleriaauto.component';
import { GalleriaModule } from 'primeng/galleria';
import { LayoutRoutingModule } from './layout-routing.module';
import { TableComponent } from './menu/menucontent/table/table.component';
import { TableModule } from 'primeng/table';
import { SplitterComponent } from './menu/menucontent/splitter/splitter.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CascadeselectComponent } from './menu/menucontent/cascadeselect/cascadeselect.component';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChartComponent } from './menu/menucontent/chart/chart.component';
import { BarComponent } from './menu/menucontent/chart/bar/bar.component';
import { ChartModule } from 'primeng/chart';
import { DoughnutchartComponent } from './menu/menucontent/chart/doughnutchart/doughnutchart.component';
import { YourguardComponent } from './menu/menucontent/yourguard/yourguard.component';
import { LineComponent } from './menu/menucontent/chart/line/line.component';
import { RadarComponent } from './menu/menucontent/chart/radar/radar.component';
import { SplitterModule } from 'primeng/splitter';
import { GgmaproadComponent } from './menu/menucontent/splitter/ggmaproad/ggmaproad.component';
import { ToastModule } from 'primeng/toast';
import { MessagesComponent } from './menu/menucontent/messages/messages.component';
import { ToastComponent } from './menu/menucontent/toast/toast.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarComponent } from './menu/menucontent/calendar/calendar.component';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { ResetpasswordComponent } from './login/resetpassword/resetpassword.component';
import { BasiclineComponent } from './menu/menucontent/chart/basicline/basicline.component';
import { PiechartComponent } from './menu/menucontent/chart/piechart/piechart.component';
import { AreachartComponent } from './menu/menucontent/chart/areachart/areachart.component';
import { Column3dComponent } from './menu/menucontent/chart/column3d/column3d.component';
import { BasiccolumnComponent } from './menu/menucontent/chart/basiccolumn/basiccolumn.component';
import { BubbleComponent } from './menu/menucontent/chart/bubble/bubble.component';



@NgModule({
  declarations: [
    GalleriaautoComponent,
    TableComponent,
    SplitterComponent,
    CascadeselectComponent,
    ChartComponent,
    BarComponent,
    DoughnutchartComponent,
    YourguardComponent,
    LineComponent,
    RadarComponent,
    GgmaproadComponent,
    MessagesComponent,
    ToastComponent,
    CalendarComponent,
    ResetpasswordComponent,
    BasiclineComponent,
    PiechartComponent,
    AreachartComponent,
    Column3dComponent,
    BasiccolumnComponent,
    BubbleComponent,
    
  ],
  imports: [
    CommonModule,
    GalleriaModule,
    LayoutRoutingModule,
    TableModule,
    ProgressSpinnerModule,
    CascadeSelectModule,
    ChartModule,
    SplitterModule,
    // GMapModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    ButtonModule,
    CardModule,
    ToolbarModule,
    ConfirmDialogModule,
    CalendarModule,
    FormsModule,
    DialogModule
    // FullCalendarModule
 

  ],

  exports: []

})
export class LayoutModule { }
