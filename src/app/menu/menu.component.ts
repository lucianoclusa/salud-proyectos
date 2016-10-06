import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 proys;
  constructor() { }

  ngOnInit() {
    this.proys=[
    {title:'PNOCH01',estado:'bien',tipo:'soluciones'},
    {title:'QOSDE05', estado:'regular',tipo:'soluciones'},
    {title:'QOSDE11',estado:'mal',tipo:'soluciones'},
    {title:'QOSDE03',estado:'bien',tipo:'operaciones'},
    {title:'PNOCH01',estado:'mal',tipo:'soluciones'},
    {title:'QOSDE05',estado:'bien',tipo:'soluciones'},
    {title:'QOSDE11',estado:'regular',tipo:'operaciones'},
    {title:'QOSDE03',estado:'regular',tipo:'soluciones'},    
    {title:'PNOCH01',estado:'bien',tipo:'soluciones'},
    {title:'QOSDE05',estado:'regular',tipo:'soluciones'},
    {title:'QOSDE11',estado:'bien',tipo:'operaciones'},
    {title:'QOSDE03',estado:'bien',tipo:'soluciones'},
    {title:'QOSDE08',estado:'regular',tipo:'soluciones'}
    ];
  }

}
