import { Component, OnInit ,HostListener} from '@angular/core';
import { SeguridadComponent} from '../shared/seguridad.component';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[SeguridadComponent],
})
export class MenuComponent  extends SeguridadComponent implements OnInit {

  private proys;
  private proysSource;
  private colNumber:number=5;
  constructor(public router:Router,public af:AngularFire) { 
    super(router,af);
    if(window.innerWidth>=1200){
      this.colNumber=5;
    }else if(window.innerWidth>=940){
      this.colNumber=4;
    }else if(window.innerWidth>=720){
      this.colNumber=3;
    }else if(window.innerWidth>=576){
      this.colNumber=2;
    }else{
       this.colNumber=1;
    }
  }

  ngOnInit() {
    this.proysSource=[
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
    this.proys=this.proysSource;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(event.target.innerWidth>=1200){
      this.colNumber=5;
    }else if(event.target.innerWidth>=940){
      this.colNumber=4;
    }else if(event.target.innerWidth>=720){
      this.colNumber=3;
    }else if(event.target.innerWidth>=576){
      this.colNumber=2;
    }else{
       this.colNumber=1;
    }
  }

  filtrar(filtro){
    this.proys=this.proysSource.filter( proy =>{
      if(filtro.estado=="") return true;
      else return filtro.estado== proy.estado;
    });
    this.proys=this.proys.filter( proy =>{
      if(filtro.tipo=="") return true;
      else return filtro.tipo== proy.tipo;
    });
  }

}
