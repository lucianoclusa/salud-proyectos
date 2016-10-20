import { Component, OnInit,HostListener,OnDestroy } from '@angular/core';
import { SeguridadComponent} from '../shared/seguridad.component';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css'],
  providers:[SeguridadComponent],
})
export class PerfilUsuarioComponent extends SeguridadComponent implements OnInit, OnDestroy {

  private user:firebase.User;
  private username:string;
  private email:string;
  private editable:boolean=false;
  public msjUser:string="";
  public msjUserColor:string="";
  public msjPsw:string="";
  private oldPassword:string;
  private newPassword:string;
  private npcopy:string;
  private colNumber:number=3;
  private subs:any;
  constructor(public router:Router,public af:AngularFire) { 
    super(router,af);
    this.subs=this.af.auth.subscribe(
      auth=>{
        this.user=auth.auth;
        this.username=this.user.displayName;
        this.email=this.user.email;
      } 
    );
    if(window.innerWidth>=1200){
      this.colNumber=3;
    }else if(window.innerWidth>=940){
      this.colNumber=2;
    }else if(window.innerWidth>=720){
      this.colNumber=1;
    }else if(window.innerWidth>=576){
      this.colNumber=1;
    }else{
       this.colNumber=1;
    }
  }

  ngOnInit() {
  }

  toogleEditar(){
    this.editable=!this.editable;
  }

  cancelarEditar(){
    this.subs.unsubscribe();
    this.subs=this.af.auth.subscribe(
      auth=>{
        this.user=auth.auth;
        this.username=this.user.displayName;
        this.email=this.user.email;
      } 
      );
    this.editable=!this.editable;
  }

  guardar(){
    this.editable=!this.editable;
    this.user.updateProfile({displayName:this.username,photoURL:""})
    .then(any=>{
      this.msjUser="Actualización exitosa";
      this.msjUserColor="blue";
    }).catch(error=>{
      this.msjUser=error.message;
      this.msjUserColor="red";
    });
  }

  cambiarPassword(){
    if(this.newPassword!=this.npcopy){
      this.msjPsw="No coinciden las Contraseñas";
    }else{
      let credentials=firebase.auth.EmailAuthProvider.credential(this.user.email, this.oldPassword);
      this.user.reauthenticate(credentials)
      .then(any=>{
        this.user.updatePassword(this.newPassword);
        this.msjPsw="Se Cambio la contraseña correctamente";
        this.newPassword="";
        this.npcopy="";
        this.oldPassword="";
      })
      .catch(error=>{
        this.msjPsw=error.message;
      });
    }
  }

  ngOnDestroy(){
        this.subs.unsubscribe();
    }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(event.target.innerWidth>=1200){
      this.colNumber=3;
    }else if(event.target.innerWidth>=940){
      this.colNumber=2;
    }else if(event.target.innerWidth>=720){
      this.colNumber=1;
    }else if(event.target.innerWidth>=576){
      this.colNumber=1;
    }else{
       this.colNumber=1;
    }
  }
}
