import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule,ReactiveFormsModule}from'@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { RegisterRoutingModule } from './register-routing.module';
import { FormRegisterComponent } from './pages/form-register/form-register.component';
import { RegisterHttpService } from './services/register-http.service';


@NgModule({
  declarations: [
    FormRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    RegisterHttpService
  ]
})
export class RegisterModule { }
