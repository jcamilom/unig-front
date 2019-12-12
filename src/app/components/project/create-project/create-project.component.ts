import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.sass']
})
export class CreateProjectComponent implements OnInit {

  constructor(private readonly authService: AuthService) {}

  ngOnInit() {
    this.authService.login('horacio@mail.com', 'pass1234').subscribe(
      (resp) => {
        console.log(resp);
      }, (err) => {
        console.log(err);
      }
    );
  }

}
