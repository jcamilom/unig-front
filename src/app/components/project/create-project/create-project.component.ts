import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeacherService } from '../../../services/teacher.service';
import { ProjectService } from 'src/app/services/project.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.sass']
})
export class CreateProjectComponent implements OnInit {

  public projectForm: FormGroup;
  public user: any;
  public teachers: any[];
  public projectTeachers: any[] = [];

  constructor(
    private readonly teacherService: TeacherService,
    private readonly projectService: ProjectService,
    private readonly dataService: DataService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit() {
    this.projectForm = this.fb.group({
      name: [''],
      status: ['active']
    });
    this.user = this.dataService.user;
    this.teacherService.getTeachers().subscribe(
      (res) => {
        this.teachers = res;
      }, (err) => {
        console.log(err);
      }
    );
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
    this.projectService.createProject(project).subscribe(
      (project) => {
        const teachersIds = [];
        this.projectTeachers.forEach((teacher) => {
          teachersIds.push(+teacher.id);
        });
        this.projectService.addTeachers(project.id, teachersIds).subscribe(
          (resp) => {
            console.log(resp);
          }, (err) => {
            console.log(err);
          }
        )
      }, (err) => {
        console.log(err);
      }
    );
  }

}
