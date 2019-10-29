import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: '../dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'reactive-forms',
        loadChildren: '../reactive-forms/reactive-forms.module#ReactiveFormModule'
      },
      {
        path: 'simple-forms',
        loadChildren: '../simple-forms/simple-forms.module#SimpleFormModule'
      }
    ]
  }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
