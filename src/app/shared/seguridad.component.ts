import {Injectable, Inject} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Injectable()
export class SeguridadComponent {

    constructor(public router:Router,public af:AngularFire){ 
        this.af.auth.subscribe(
            auth => {
                if(auth) {
                    console.log('logged in');
                } else {
                    console.log('not logged in');
                    this.router.navigate(['/']);
                }
        });
    }
  
}