import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './componentes/items/items.component';
import { NuevoitemComponent } from './componentes/nuevoitem/nuevoitem.component';

const routes: Routes = [
  {
    path:'',
    component: ItemsComponent
  },
  {
    path:'add',
    component: NuevoitemComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
