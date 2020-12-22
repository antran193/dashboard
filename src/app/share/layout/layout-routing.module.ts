import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleriaautoComponent } from './menu/menucontent/galleriaauto/galleriaauto.component';

const routes: Routes = [{
  path: 'a' , component : GalleriaautoComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class LayoutRoutingModule { }
