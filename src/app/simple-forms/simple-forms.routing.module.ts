import { SimpleFormsComponent } from './simple-forms.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
      path: '',
      component: SimpleFormsComponent,
      children: [
        {
          path: 'simple-forms',
          loadChildren: './simple-forms/simple-forms.module#SimpleFormModule'
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleFormsRoutingModule { }
