import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeacherService } from '../../../services/teacher.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.sass']
})
export class CreateProjectComponent implements OnInit {

  public projectForm: FormGroup;
  public user: any;
  private token: string;
  public teachers: any[];
  public projectTeachers: any[] = [];

  constructor(
    private readonly authService: AuthService,
    private readonly teacherService: TeacherService,
    private readonly projectService: ProjectService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit() {
    this.authService.login('horacio@mail.com', 'pass1234').subscribe(
      (resp) => {
        this.user = resp.user;
        this.token = resp.token;
        this.teacherService.getTeachers(this.token).subscribe(
          (res) => {
            this.teachers = res;
          }, (err) => {
            console.log(err);
          }
        );
      }, (err) => {
        console.log(err);
      }
    );
    this.projectForm = this.fb.group({
      name: [''],
      status: ['active']
    });
  }

  public onTeacherAdded($event) {
    this.projectTeachers.push($event);
  }

  public onSubmit() {
    const project = this.projectForm.value;
    if (project.status === 'active') {
      project.status = true;
    } else {
      project.status = false;
    }
    this.projectService.createProject(project, this.token).subscribe(
      (resp) => {
        console.log(resp);
      }, (err) => {
        console.log(err);
      }
    )
  }

}
