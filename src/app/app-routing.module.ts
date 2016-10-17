import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoProyectoComponent } from './nuevo-proyecto/nuevo-proyecto.component';
import { MenuComponent } from './menu/menu.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: 'menu',component: MenuComponent},
  {path: 'nuevoProyecto',component: NuevoProyectoComponent},
  {path: 'miPerfil',component: PerfilUsuarioComponent},
  {path: 'registro',component: RegistroComponent},
  {path: '',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class OsdeSaludoAngular2RoutingModule { }
