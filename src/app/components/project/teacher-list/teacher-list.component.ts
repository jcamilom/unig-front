import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.sass']
})
export class TeacherListComponent implements OnInit {

  @Input() teachers: any[];

  constructor() { }

  ngOnInit() {
  }

}
