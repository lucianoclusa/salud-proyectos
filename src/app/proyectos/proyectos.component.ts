import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
@Input() proyecto;
  constructor() { }

  ngOnInit() {
  }

}
