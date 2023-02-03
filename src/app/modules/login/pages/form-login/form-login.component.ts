import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginHttpService } from '../../services/login-http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginHttpResponseInterface } from '../../interface/login.interface';
import { lastValueFrom } from "rxjs";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {

  constructor( private router:Router, private loginHttpService:LoginHttpService) {

  }
  public register():void{
    this.router.navigate(['/register/formRegister']);
  }

  public authLogin: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  });

  public async loginUser(): Promise<void>{
    try {
      const resp: LoginHttpResponseInterface = await lastValueFrom(
        this.loginHttpService.getLogin(
          this.authLogin.get('email')?.value,
          this.authLogin.get('password')?.value
        )
      );
      localStorage.setItem('token',resp.token);
      this.router.navigate(['user/userUrlsList']);
    } catch (error) {
      console.log('err',error);
    }
  }

}
