import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.sass']
})
export class CreateProjectComponent implements OnInit {

  public projectForm: FormGroup;
  public user: any;
  private token: string;

  constructor(
    private readonly authService: AuthService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit() {
    this.authService.login('horacio@mail.com', 'pass1234').subscribe(
      (resp) => {
        this.user = resp.user;
        this.token = resp.token;
      }, (err) => {
        console.log(err);
      }
    );
    this.projectForm = this.fb.group({
      name: [''],
      status: ['active']
    });
  }

}
