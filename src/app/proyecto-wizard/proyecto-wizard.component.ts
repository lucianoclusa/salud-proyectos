import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-proyecto-wizard',
  templateUrl: './proyecto-wizard.component.html',
  styleUrls: ['./proyecto-wizard.component.css']
})
export class ProyectoWizardComponent implements OnInit {
  private id:string;
  private sub: any;

  public items:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
    'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
    'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'Łódź', 'London', 'Kraków', 'Madrid',
    'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
    'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
    'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
    'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];

  private value:any = ['Athens'];
  private _disabledV:string = '0';
  private disabled:boolean = false;

  private paso1:string;
  private paso2:string;
  private paso3:string;

  private dateFromInput:string;
  private dateFrom:string='hide';

  private dateToInput:string;

  private dateTo:string='hide';

  constructor(private route: ActivatedRoute) {
    this.paso1="showPaso";
    this.paso2="hidePaso";
    this.paso3="hidePaso";
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

  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }
}
