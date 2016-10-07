import { Component, OnInit } from '@angular/core';
import { SeguridadComponent} from '../shared/seguridad.component';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css'],
  providers:[SeguridadComponent],
})
export class NuevoProyectoComponent extends SeguridadComponent implements OnInit {

  private codigo:string;
  private nombre:string;
  private lider:string;
  private email:string;
  private msjerror:string;
  private showError:boolean;

  constructor(public router:Router,public af:AngularFire) { 
    super(router,af);
  }

  ngOnInit() {
  }

  crearProyecto(){
    this.af.auth.createUser({email:this.email,password:'initial01'})
    .then((success) => {
      console.log(success);
      success.auth.sendEmailVerification();
      this.router.navigate(['/menu'])})
    .catch((error) => {
        this.msjerror=error.message;
        this.showError=true
    });
  }

}
