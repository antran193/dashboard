import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './share/layout/layout.component';
import { HeaderComponent } from './share/layout/header/header.component';
import { MenuComponent } from './share/layout/menu/menu.component';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import {TabMenuModule} from 'primeng/tabmenu';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    SidebarModule,
    PanelMenuModule,
    TieredMenuModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
