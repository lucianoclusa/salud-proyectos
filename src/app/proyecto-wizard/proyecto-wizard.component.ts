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
}
