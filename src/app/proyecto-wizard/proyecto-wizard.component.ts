import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-proyecto-wizard',
  templateUrl: './proyecto-wizard.component.html',
  styleUrls: ['./proyecto-wizard.component.css'],
  viewProviders: [MdIconRegistry]
})
export class ProyectoWizardComponent implements OnInit {
  private id:string;
  private sub: any;

  private paso1:string;
  private paso2:string;
  private paso3:string;
  private progress:number=0;

  private dateFromInput:string;
  private dateFrom:string='hide';

  private dateToInput:string;

  private dateTo:string='hide';

  private dateIssue='hide';
  private dateIssueInput;

  private apps:any[]=[];

  private appNombreInput:string;
  private tecs:any[]=[];

  private issues:any[]=[];
  private accionIssue;
  private descIssue;
  private gdmIssue;

  private actividades:String[]=[];

  constructor(private route: ActivatedRoute,mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.registerFontClassAlias('emoji', 'em');
    this.paso1="show";
    this.paso2="hide";
    this.paso3="hide";
   }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
       this.id=params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  cambiarPaso(){
    if(this.paso1=="showPaso"){
      this.paso1="hidePaso";
      this.paso2="showPaso";
      this.paso3="hidePaso";
    }else if(this.paso2=="showPaso"){
      this.paso1="hidePaso";
      this.paso2="hidePaso";
      this.paso3="showPaso";
    }else{
      this.paso1="showPaso";
      this.paso2="hidePaso";
      this.paso3="hidePaso";
    }
  }

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

  openDateIssue(){
    this.dateIssue="show";
  }

  closeIssue(){
    this.dateIssue="hide";
  }

  setIssueDate(date){
    this.dateIssue="hide";
    this.dateIssueInput= date.toLocaleString().split(',')[0];
  }

  addApp(tecs){
    let app={nombre:this.appNombreInput,tecnologias:tecs.tecs.reduce((a,b)=>a+','+b)}
    tecs.clrTecs();
    this.appNombreInput="";
    this.apps.push(app);
  }

  removeApp(appname){
    this.apps=this.apps.filter(a=>a.nombre!=appname);
  }

  next(){
    this.progress+=1;
    console.log("paso");
    switch(this.progress){
      case 1:
        this.paso1='hide';
        this.paso2='show';
        this.paso3='hide';
        break;
      case 2:
        this.paso1='hide';
        this.paso2='hide';
        this.paso3='show';
        break;
      case 3:
        this.paso1='hide';
        this.paso2='hide';
        this.paso3='hide';
        break;
    }
  }

  back(){
    this.progress-=1;
    console.log("paso");
    switch(this.progress){
      case 0:
        this.paso1='show';
        this.paso2='hide';
        this.paso3='hide';
        break;
      case 1:
        this.paso1='hide';
        this.paso2='show';
        this.paso3='hide';
        break;
      case 2:
        this.paso1='hide';
        this.paso2='hide';
        this.paso3='show';
        break;
    }
  }

  addActividad(actividad){
    this.actividades.push(actividad.value);
    actividad.value="";
  }

  removeActividad(actividad){
    this.actividades=this.actividades.filter(a=>a!=actividad);
  }

  addIssue(){
    let issue={descripcion:this.descIssue,accion:this.accionIssue,fecha:this.dateIssueInput,gdm:this.gdmIssue};
    this.issues.push(issue);
    this.descIssue="";
    this.accionIssue="";
    this.dateIssueInput="";
    this.gdmIssue="";
  }
}
