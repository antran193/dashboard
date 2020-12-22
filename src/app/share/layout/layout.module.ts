import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import {SidebarModule} from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { GalleriaautoComponent } from './menu/menucontent/galleriaauto/galleriaauto.component';
import {GalleriaModule} from 'primeng/galleria';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    GalleriaautoComponent
    
  ],
  imports: [
    CommonModule,
    SidebarModule,
    PanelMenuModule,
    TieredMenuModule,
    GalleriaModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
