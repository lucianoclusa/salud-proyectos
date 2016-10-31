import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  private date:Date= new Date();
  private days:Array<Number>;

  private days1:Array<Number>;
  private days2:Array<Number>;
  private days3:Array<Number>;
  private days4:Array<Number>;
  private days5:Array<Number>;
  private days6:Array<Number>;

  @Output() pick = new EventEmitter();
  constructor() {
    this.updateDate();
   }

  ngOnInit() {
  }

  getMonth(){
    var mes= ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    return mes[this.date.getUTCMonth()];
  }

  numberOfDays(year, month) {
    var d = new Date(year, month+1, 0);
    return d.getDate();
  }

  updateDate(){
    var tmp=this.numberOfDays(this.date.getFullYear(),this.date.getUTCMonth());
    this.days= Array(tmp).fill().map((x,i)=>i+1);
    var d = new Date(this.date.getFullYear(),this.date.getUTCMonth(), 1);
    for(let i=0;i<d.getDay();i++){
        this.days.unshift(0);
    }
    this.days1=this.days.slice(0,7);
    this.days2=this.days.slice(7,14);
    this.days3=this.days.slice(14,21);
    this.days4=this.days.slice(21,28);
    this.days5=this.days.slice(28,35);
    for(let i=this.days5.length;i<7;i++){
      this.days5.push(0);
    }
    this.days6=this.days.slice(35,42);
    for(let i=this.days6.length;i<7;i++){
      this.days6.push(0);
    }
  }

  upMonth(){
    if(this.date.getMonth()==11){
      this.date= new Date(this.date.getFullYear()+1,0,1);
    }else{
      this.date= new Date(this.date.getFullYear(),this.date.getMonth()+1,1);
    }
    this.updateDate();
  }

  downMonth(){
    if(this.date.getMonth()==0){
      this.date= new Date(this.date.getFullYear()-1,11,1);
    }else{
      this.date= new Date(this.date.getFullYear(),this.date.getMonth()-1,1);
    }
    this.updateDate();
  }

  upYear(){
    this.date=new Date(this.date.getFullYear()+1,this.date.getMonth(),1);
    this.updateDate();
  }

  downYear(){
    this.date=new Date(this.date.getFullYear()-1,this.date.getMonth(),1);
    this.updateDate();
  }

  selectDate(value){
    console.log(value);
    console.log(new Date(this.date.getFullYear(),this.date.getMonth(),value));
    this.pick.emit(new Date(this.date.getFullYear(),this.date.getMonth(),value));

  }
}
