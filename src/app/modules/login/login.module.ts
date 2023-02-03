import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule,ReactiveFormsModule}from'@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { LoginRoutingModule } from './login-routing.module';
import { FormLoginComponent } from './pages/form-login/form-login.component';
import { LoginHttpService } from './services/login-http.service';


@NgModule({
  declarations: [
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    LoginHttpService
  ]
})
export class LoginModule { }
