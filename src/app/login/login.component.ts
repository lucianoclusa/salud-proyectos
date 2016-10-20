import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  private user;
  private password:string;
  private mensaje:string;
  private mostrarmensaje:boolean=false;
  private subs:any;
  constructor(private router:Router,private af:AngularFire) { }

  ngOnInit() {
    this.subs=this.af.auth.subscribe(
      auth => {
    if(auth) {
      console.log('logged in');
       this.router.navigate(['/menu']);
    } else {
      console.log('not logged in');
      }});
  }
  mostrarUsuarioPassword() {
    this.mensaje='';
    console.log(this.user);
    console.log(this.password);
    this.af.auth.login({ email: this.user, password: this.password })
    .then((success) => {this.router.navigate(['/menu'])})
    .catch((error) => {
      this.mensaje='Usuario o password Incorrecto'
    });
  }

  ngOnDestroy(){
        this.subs.unsubscribe();
    }

}