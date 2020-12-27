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
import { CascadeSelectModule } from 'primeng/cascadeselect';

@NgModule({
  declarations: [
    GalleriaautoComponent,
    TableComponent,
    SplitterComponent,
    CascadeselectComponent
  ],
  imports: [
    CommonModule,
    GalleriaModule,
    LayoutRoutingModule,
    TableModule,
    ProgressSpinnerModule,
    CascadeSelectModule
  ],
  exports: [
  ]
  
})
export class LayoutModule { }
