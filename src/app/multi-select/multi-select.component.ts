import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit {

  private tecs:Array<String>=new Array();
  private tecInput;

  constructor() { }

  ngOnInit() {
  }

  addTec(){
    if(this.tecInput!="" && !this.tecs.find(a=>a==this.tecInput))
      this.tecs.push(this.tecInput);
    this.tecInput="";
  }

  remove(tec){
    this.tecs=this.tecs.filter(a=>a!=tec);
  }

  clrTecs(){
    this.tecs=[];
  }

  writeSome(event){
    this.addTec();
  }
}
