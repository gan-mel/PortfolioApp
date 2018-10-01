import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'staff',

     loadChildren: './staff/staff.module#StaffModule'
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
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
