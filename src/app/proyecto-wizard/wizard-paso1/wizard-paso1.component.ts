import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-wizard-paso1',
  templateUrl: './wizard-paso1.component.html',
  styleUrls: ['../proyecto-wizard.component.css']
})
export class WizardPaso1Component implements OnInit {

  @Input() proyectoId;

  private datosBasicos;

  //input fecha desde
  private dateFromInput:string;
  private dateFrom:string='hide';

  //input fecha hasta
  private dateToInput:string;
  private dateTo:string='hide';

  private apps:any[]=[];
  private appNombreInput:string;
  private tecs:any[]=[];

  constructor() { }

  ngOnInit() {
  }

  getDatos():any{
    return this.datosBasicos;
  }

  //Manejo de los datePicker TODO: mover la funcionalidad al calendario
  openDateTo(){
    this.dateTo="show";
  }

  closeTo(){
    this.dateTo="hide";
  }

  setFromto(date){
    this.dateTo="hide";
  }

  setToDateValue(date:Date){
    this.dateTo="hide";
    this.dateToInput= date.toLocaleString().split(',')[0];
  }

  openDateFrom(){
    this.dateFrom="show";
  }

  closeFrom(){
    this.dateFrom="hide";
  }

  setFromDate(date){
    this.dateFrom="hide";
  }

  setFromDateValue(date:Date){
    this.dateFrom="hide";
    this.dateFromInput= date.toLocaleString().split(',')[0];
  }

  //Manejo del campo de app y tecnologias
    addApp(tecs){
    let app={nombre:this.appNombreInput,tecnologias:tecs.tecs.reduce((a,b)=>a+','+b)}
    tecs.clrTecs();
    this.appNombreInput="";
    this.apps.push(app);
  }

  removeApp(appname){
    this.apps=this.apps.filter(a=>a.nombre!=appname);
  }

}
