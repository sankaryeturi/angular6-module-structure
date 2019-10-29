import { ReactiveFormsRoutingModule } from './reactive-forms.routing.module';
import { ReactiveFormsComponent } from './reactive-forms.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [ReactiveFormsComponent]
})
export class ReactiveFormModule {

}
