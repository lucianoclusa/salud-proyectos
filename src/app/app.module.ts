import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { OsdeSaludoAngular2RoutingModule }  from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AngularFireModule,AuthProviders,AuthMethods } from 'angularfire2';
import { myFirebaseConfig,myFirebaseAuthConfig } from '../environments/environment';
import { MaterialModule } from '@angular/material';
import {SelectModule} from 'ng2-select/ng2-select';

import { AppComponent } from './app.component';
import { NuevoProyectoComponent } from './nuevo-proyecto/nuevo-proyecto.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { RegistroComponent } from './registro/registro.component';
import { InformacionComponent } from './informacion/informacion.component';
import { MenuFiltrosComponent } from './menu-filtros/menu-filtros.component';
import { VerProyectoComponent } from './ver-proyecto/ver-proyecto.component';
import { ProyectoWizardComponent } from './proyecto-wizard/proyecto-wizard.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { MultiSelectComponent } from './multi-select/multi-select.component'


@NgModule({
  declarations: [
    AppComponent,
    NuevoProyectoComponent,
    MenuComponent,
    LoginComponent,
    NavbarComponent,
    ProyectosComponent,
    PerfilUsuarioComponent,
    RegistroComponent,
    InformacionComponent,
    MenuFiltrosComponent,
    VerProyectoComponent,
    ProyectoWizardComponent,
    CalendarioComponent,
    MultiSelectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    OsdeSaludoAngular2RoutingModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
    MaterialModule.forRoot(),
    SelectModule
  ],
  providers: [OsdeSaludoAngular2RoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
