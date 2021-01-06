import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './share/layout/layout.component';



const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: '', loadChildren: () => import('src/app/share/layout/layout.module').then(m => m.LayoutModule)
      }
    ]
  },
  {
    path: '', component: LoginComponent, children: [
      {
        path: '', loadChildren: () => import('src/app/login/login.module').then(m => m.LoginModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
