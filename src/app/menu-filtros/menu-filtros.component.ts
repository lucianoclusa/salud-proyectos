import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-menu-filtros',
  templateUrl: './menu-filtros.component.html',
  styleUrls: ['./menu-filtros.component.css']
})
export class MenuFiltrosComponent implements OnInit {
  
  private tipo:string;
  private estado:string;
  private tipoIcono:string;
  private estadoColor:string;
  private iconFilters:string;
  private filtros={'estado':"",'tipo':""};

  @Output() filtrosCambios= new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.tipo="hidden";
    this.estado="hidden";
    this.tipoIcono="filter_none"
    this.estadoColor="gris";
    this.iconFilters="filter_list";
  }

  toogleFilters(){
    if(this.tipo=="hidden"){
      this.tipo="showTipo";
      this.estado="showEstado";
      this.iconFilters="arrow_drop_down";
    }else{
      this.tipo="hidden";
      this.estado="hidden";
      this.iconFilters="filter_list";
    }
  }

  toogleTipo(){
    if(this.tipoIcono=="settings"){
      this.tipoIcono="bug_report";
      this.filtros.tipo="operaciones";
    }else if(this.tipoIcono=="bug_report"){
      this.tipoIcono="filter_none";
      this.filtros.tipo="";
    }else{
      this.tipoIcono="settings";
      this.filtros.tipo="soluciones";
    }
    this.filtrosCambios.emit(this.filtros);
  }

  toogleEstado(){
    if(this.estadoColor=="gris"){
      this.estadoColor="verde";
      this.filtros.estado="bien";
    }else if(this.estadoColor=="verde"){
      this.estadoColor="amarillo";
      this.filtros.estado="regular";
    }else if(this.estadoColor=="amarillo"){
      this.estadoColor="rojo";
      this.filtros.estado="mal";
    }else{
      this.estadoColor="gris";
      this.filtros.estado="";
    }
    this.filtrosCambios.emit(this.filtros);
  }

}
