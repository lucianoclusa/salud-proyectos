import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  proys = [{title:'PNOCH01',estado:'bien'},{title:'QOSDE05',
  estado:'regular'},{title:'QOSDE11',estado:'mal'},{title:'QOSDE03',estado:'bien'}];

  constructor() { }

  ngOnInit() {
  }

}
