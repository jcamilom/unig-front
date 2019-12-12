import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.sass']
})
export class AddTeacherComponent implements OnInit {

  public teacherForm: FormGroup;

  @Input() teachers: any[];
  @Output() teacherAdded: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private readonly fb: FormBuilder
  ) { }

  ngOnInit() {
    this.teacherForm = this.fb.group({
      name: [''],
      role: ['']
    });
  }

  public onSubmit() {
    const selectedTeacher = this.teacherForm.value;
    this.teachers.forEach((teacher) => {
      if (+teacher.id === +selectedTeacher.name) {
        selectedTeacher.id = teacher.id;
        selectedTeacher.name = teacher.user.name;
      }
    });
    this.teacherAdded.emit(selectedTeacher);
  }

}
