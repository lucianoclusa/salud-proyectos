import {Injectable, Inject, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Injectable()
export class SeguridadComponent implements OnDestroy{

    private sub:any;
    constructor(public router:Router,public af:AngularFire){ 
        this.sub=this.af.auth.subscribe(
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

    ngOnDestroy(){
        this.sub.unsubscribe();
    }
  
}