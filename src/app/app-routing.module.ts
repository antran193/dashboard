import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './share/layout/layout.component';


const routes : Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path : 'layout', loadChildren:() => import('src/app/share/layout/layout.module').then(m => m.LayoutModule)
      }
    ]    
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
