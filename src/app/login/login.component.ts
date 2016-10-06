import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router:Router) { }

  ngOnInit() {
  }
  mostrarUsuarioPassword() {
    console.log(this.user);
    console.log(this.password);
    if (this.user=='pepe'&& this.password=='pepito')
    {
      this.router.navigate(['/menu']);
    } else
    {
      this.mensaje='Usuario Incorrecto'
      this.mostrarmensaje=true
    }
  }
}