import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import {SidebarModule} from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { GalleriaautoComponent } from './menu/menucontent/galleriaauto/galleriaauto.component';

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
    TieredMenuModule
  ]
})
export class LayoutModule { }
