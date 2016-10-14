import { Component, OnInit } from '@angular/core';
import { Router ,NavigationStart} from '@angular/router';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public disabled:boolean = false;
  public logged:boolean = false;
  public username:string;
  public status:{isopen:boolean} = {isopen: false};
  public menuActive:boolean =false;
  public perfilActive:boolean=false;

  constructor(public router: Router,public af:AngularFire ) {
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        if(event.url=='/menu') {
          this.menuActive=true;
          this.perfilActive=false;
        }else if(event.url=='/miPerfil'){
          this.menuActive=false;
          this.perfilActive=true;
        }
        else{ 
          this.menuActive=false;
          this.perfilActive=false;
        }
        af.auth.subscribe(auth => {
          if(auth) {
              this.logged=true;
              var usr=auth.auth.email.split("@")[0].split(".");
              this.username=usr[0] +" "+ usr[1];
          }
        });
      }
    })
  }

  logout(){
    this.logged=false;
    this.af.auth.logout();
  }
}
