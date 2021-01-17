import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DialogModule } from 'primeng/dialog';
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
import {ButtonModule} from 'primeng/button';
import { LoginComponent } from './share/layout/login/login/login.component';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ForgetpasswordComponent } from './share/layout/login/forgetpassword/forgetpassword.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChipModule } from 'primeng/chip';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    LoginComponent,
    ForgetpasswordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    SidebarModule,
    PanelMenuModule,
    TieredMenuModule,
    TabMenuModule,
    ButtonModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    FormsModule,
    InputTextareaModule,
    ChipModule,
    MessageModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
