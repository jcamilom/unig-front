import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public pageTitle = 'Iniciar sesion';
  public loginForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly dataService: DataService
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
        console.log(resp)
      }, (err) => {
        console.log(err);
      }
    );
  }

}
