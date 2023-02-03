import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './pages/form-login/form-login.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'formlogin',
        component: FormLoginComponent,  
      },
      {
        path: '**',
        redirectTo: 'formlogin'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
