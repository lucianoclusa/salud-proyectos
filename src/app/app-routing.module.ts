import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoProyectoComponent } from './nuevo-proyecto/nuevo-proyecto.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: '',component: MenuComponent},
  {path: 'nuevoProyecto',component: NuevoProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class OsdeSaludoAngular2RoutingModule { }
