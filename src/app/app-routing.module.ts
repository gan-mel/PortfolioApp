import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
//import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'staff',

     loadChildren: './staff/staff.module#StaffModule'
  },
  // {
  //   path: 'test',
  //   component: TestComponent,
  // },
  {
    path: '',
    component: MainpageComponent,
   // redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
