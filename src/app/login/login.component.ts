import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user;
password:string;
mensaje:string;
mostrarmensaje:boolean=false;
  constructor(private router:Router,private af:AngularFire) { }

  ngOnInit() {
    this.af.auth.subscribe(
      auth => {
    if(auth) {
      console.log('logged in');
       this.router.navigate(['/menu']);
    } else {
      console.log('not logged in');
      }});
  }
  mostrarUsuarioPassword() {
    console.log(this.user);
    console.log(this.password);
    this.af.auth.login({ email: this.user, password: this.password })
    .then((success) => {this.router.navigate(['/menu'])})
    .catch((error) => {
      this.mensaje='Usuario Incorrecto'
      this.mostrarmensaje=true
    });
  }

}