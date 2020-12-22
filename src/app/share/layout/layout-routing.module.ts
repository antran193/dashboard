import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { GalleriaautoComponent } from './menu/menucontent/galleriaauto/galleriaauto.component';

const routes: Routes = [{
  path: '/girl' , component : GalleriaautoComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
