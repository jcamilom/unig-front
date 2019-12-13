import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public pageTitle = 'Bienvenido - Gestion de Proyectos';

  constructor() { }

  ngOnInit() {
  }

}
