import { ReactiveFormsComponent } from './reactive-forms.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
      path: '',
      component: ReactiveFormsComponent,
      children: [
        {
          path: 'reactive-forms',
          loadChildren: './reactive-forms/reactive-forms.module#ReactiveFormModule'
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormsRoutingModule { }
