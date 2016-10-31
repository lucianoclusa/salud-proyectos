import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoProyectoComponent } from './nuevo-proyecto/nuevo-proyecto.component';
import { MenuComponent } from './menu/menu.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InformacionComponent } from './informacion/informacion.component';
import { VerProyectoComponent } from './ver-proyecto/ver-proyecto.component';
import { ProyectoWizardComponent } from './proyecto-wizard/proyecto-wizard.component';



const routes: Routes = [
  {path: 'menu',component: MenuComponent},
  {path: 'nuevoProyecto',component: NuevoProyectoComponent},
  {path: 'miPerfil',component: PerfilUsuarioComponent},
  {path: 'registro',component: RegistroComponent},
  {path: 'info/:msj',component: InformacionComponent},
  {path: 'proyecto/:id',component: VerProyectoComponent},
  {path: 'wizard/:id',component: ProyectoWizardComponent},
  {path: '',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class OsdeSaludoAngular2RoutingModule { }
