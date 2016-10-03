import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { OsdeSaludoAngular2RoutingModule }  from './app-routing.module';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NuevoProyectoComponent } from './nuevo-proyecto/nuevo-proyecto.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoProyectoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    OsdeSaludoAngular2RoutingModule
  ],
  providers: [OsdeSaludoAngular2RoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
