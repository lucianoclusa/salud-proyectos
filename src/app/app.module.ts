import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { OsdeSaludoAngular2RoutingModule }  from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AngularFireModule,AuthProviders,AuthMethods } from 'angularfire2';
import { myFirebaseConfig,myFirebaseAuthConfig } from '../environments/environment';

import { AppComponent } from './app.component';
import { NuevoProyectoComponent } from './nuevo-proyecto/nuevo-proyecto.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ProyectosComponent } from './proyectos/proyectos.component';


@NgModule({
  declarations: [
    AppComponent,
    NuevoProyectoComponent,
    MenuComponent,
    LoginComponent,
    NavbarComponent,
    ProyectosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    OsdeSaludoAngular2RoutingModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [OsdeSaludoAngular2RoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
