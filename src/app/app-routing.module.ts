import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SSTFullLayoutComponent } from '@southsystem/layout';

const routes: Routes = [
  {
    path: '',
    component: SSTFullLayoutComponent,
    children: [
      {
        path: 'users',
        loadChildren: './modules/users/users.module#UsersModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
