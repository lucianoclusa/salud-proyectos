import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  private email:string;
  private errorMail:string;
  private passwordconf:string;
  private password:string;
  private errorPassword:string;
  private nombre:string;
  private errorNombre:string;
  private apellido:string;
  private errorApellido:string;

  constructor(public router:Router,public af:AngularFire) {
   }

  ngOnInit() {
  }

  registrar(){
    this.errorPassword="";
    this.errorNombre="";
    this.errorApellido="";
    this.errorMail="";

    if(!this.validarCampos())return;
    this.af.auth.createUser({email:this.email,password:this.password})
    .then((success) => {
      console.log(success);
      success.auth.updateProfile({displayName:this.nombre+" "+this.apellido, photoURL: null});
      success.auth.sendEmailVerification();
      this.router.navigate(['/info',"validarCuenta"])}
    ).catch(
        (error)=>{
          switch(error.code){
            case'auth/invalid-email':
              this.errorMail="Formato de correo incorrecto";
              break;
            case 'auth/email-already-in-use':
              this.errorMail="Ya existe una cuenta con este correo";
              break;
            case 'auth/weak-password':
              this.errorPassword="Contraseña insegura";
              break;
          }
        }
      )
  }

  validarCampos(){
    if(!this.nombre){
      this.errorNombre="Ingrese su nombre";
      return false;
    }
    if(!this.apellido){
      this.errorApellido="Ingrese su apellido";
      return false;
    }
    if(!this.email){
      this.errorMail="Ingrese su correo";
      return false;
    }
    if(!this.email.includes("@softtek.com")){
      this.errorMail="Ingrese un correo con dominio Softtek";
      return false;
    }
    if(!this.password){
      this.errorPassword="Ingrese una contraseña";
      return false;
    }
    if(this.password.length<6){
      this.errorPassword="La contraseña es corta";
      return false;
    }
    if(this.password!=this.passwordconf){
      this.errorPassword="Las contraseñas no coinciden";
      return false;
    }
    return true;
  }
}
