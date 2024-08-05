import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClimaRoutingModule } from './clima-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ClimaRoutingModule,
    FormsModule,
  ],
  exports : [
    DashboardComponent
  ]
})
export class ClimaModule { }
