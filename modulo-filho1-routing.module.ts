import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteFilho1 } from './componente-filho1/componente-filho1.component';

const routes: Routes = [
  { path: 'child1', component: ComponenteFilho1 }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
  export class ModuloFilho1RoutingModule {}
