import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path : 'clima', loadChildren : ()=>import('./modules/clima/clima.module').then((m)=>m.ClimaModule)
  },
  {
    path : '**', redirectTo : 'clima'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
