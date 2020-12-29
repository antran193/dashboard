import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaautoComponent } from './menu/menucontent/galleriaauto/galleriaauto.component';
import {GalleriaModule} from 'primeng/galleria';
import { LayoutRoutingModule } from './layout-routing.module';
import { TableComponent } from './menu/menucontent/table/table.component';
import {TableModule} from 'primeng/table';
import { SplitterComponent } from './menu/menucontent/splitter/splitter.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { CascadeselectComponent } from './menu/menucontent/cascadeselect/cascadeselect.component';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import { ChartComponent } from './menu/menucontent/chart/chart.component';
import { BarComponent } from './menu/menucontent/chart/bar/bar.component';
import {ChartModule} from 'primeng/chart';
import { DoughnutchartComponent } from './menu/menucontent/chart/doughnutchart/doughnutchart.component';
import { YourguardComponent } from './menu/menucontent/yourguard/yourguard.component';
import { LineComponent } from './menu/menucontent/chart/line/line.component';
import { RadarComponent } from './menu/menucontent/chart/radar/radar.component';
import { SplitterModule } from 'primeng/splitter';
import {GMapModule} from 'primeng/gmap';
import { GgmaproadComponent } from './menu/menucontent/splitter/ggmaproad/ggmaproad.component';


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
    GgmaproadComponent
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
    GMapModule

  ],
  exports: [
  ]
  
})
export class LayoutModule { }
