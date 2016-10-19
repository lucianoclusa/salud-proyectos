import {Injectable, Inject} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Injectable()
export class SeguridadComponent {

    constructor(public router:Router,public af:AngularFire){ 
        this.af.auth.subscribe(
            auth => {
                if(auth) {
                    if(auth.auth.emailVerified){
                        console.log('logeado');
                    }else{
                        console.log('no verificada');
                        this.router.navigate(['/info',"noValidada"])
                    }
                } else {
                    console.log('not logged in');
                    this.router.navigate(['/']);
                }
        });
    }
  
}