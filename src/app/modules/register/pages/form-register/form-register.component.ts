import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterHttpService } from '../../services/register-http.service';
import { lastValueFrom } from "rxjs";
import { RegisterHttpResponseInterface } from '../../interface/register.interface';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent {
  constructor(private router: Router, private registerHttpService: RegisterHttpService) { }

  public login(): void {
    this.router.navigate(['/login/formlogin']);
  }

  public saveRegister: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  public async registerUser(): Promise<void> {
    try {
      const res: RegisterHttpResponseInterface = await lastValueFrom(
        this.registerHttpService.getRegister(
          this.saveRegister.get('fullName')?.value,
          this.saveRegister.get('email')?.value,
          this.saveRegister.get('password')?.value)
      );
      localStorage.setItem('idUser',res.id);
      this.router.navigate(['/login/formlogin']);
    } catch (error) {
      console.log("ERR", error)
    }

  }

}
