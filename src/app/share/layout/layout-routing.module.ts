import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleriaautoComponent } from './menu/menucontent/galleriaauto/galleriaauto.component';
import { TableComponent } from './menu/menucontent/table/table.component';

const routes: Routes = [{
  path: 'aa' , component : GalleriaautoComponent
},
{
  path: 'table' , component : TableComponent
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
