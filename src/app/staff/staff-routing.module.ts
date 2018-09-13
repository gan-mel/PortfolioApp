import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
