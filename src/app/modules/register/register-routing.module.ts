import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegisterComponent } from './pages/form-register/form-register.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'formRegister',
        component: FormRegisterComponent,
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
