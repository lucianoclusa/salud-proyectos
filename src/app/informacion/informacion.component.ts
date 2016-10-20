import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit, OnDestroy {

  msj: string;
  submsj: string;
  icon: string;
  private sub: any;
  buttontxt:string;
  btnfunction:string;
  showbutton:boolean=false;

  constructor(private route: ActivatedRoute,public router:Router,public af:AngularFire) { }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
       this.setMsj(params['msj']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  setMsj(type:string){
    switch(type){
      case 'validarCuenta':
        this.icon="info_outline";
        this.msj='Su cuenta requiere ser activada.';
        this.submsj='Un correo llegara a su casilla con un link para que pueda activarla.';
        break;
      case 'noValidada':
        this.icon="warning";
        this.msj='Su cuenta no esta activada';
        this.submsj='Si no le llego el correo, haga click';
        this.showbutton=true;
        break;
    }
  }

  reenviarMail(){
    this.icon="info_outline";
    this.msj='Se le envio el correo de confirmacion a su cuenta';
    this.submsj='Acceda al link en el mismo para que activar la cuenta.';
    this.showbutton=false;
    this.af.auth.subscribe((auth)=>{
      auth.auth.sendEmailVerification().then(a=>this.af.auth.logout());
    });
  }
}
