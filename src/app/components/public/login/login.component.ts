import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public pageTitle = 'Iniciar sesion';
  public loginForm: FormGroup;
  public loginFailed: boolean;
  public loginErrorMessage: string;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly dataService: DataService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  public onSubmit() {
    const formValue = this.loginForm.value;
    this.authService.login(formValue.email, formValue.password).subscribe(
      (resp) => {
        this.dataService.user = resp.user;
        this.dataService.token = resp.token;
        this.router.navigate(['/dashboard']);
      }, (err: HttpErrorResponse) => {
        this.loginFailed = true;
        if (err.status === 404) {
          this.loginErrorMessage = 'Credenciales inválidas. Intenta nuevamente';
        } else {
          this.loginErrorMessage = 'Ha ocurrido un error. Intenta nuevamente';
        }
      }
    );
  }

}
