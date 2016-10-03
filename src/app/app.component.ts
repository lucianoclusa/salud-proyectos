import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  proys = [{title:'PNOCH01',estado:'bien'},{title:'QOSDE05',
  estado:'regular'},{title:'QOSDE11',estado:'mal'},{title:'QOSDE03',estado:'bien'}];
}
