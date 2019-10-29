import { SimpleFormsRoutingModule } from './simple-forms.routing.module';
import { SimpleFormsComponent } from './simple-forms.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SimpleFormsRoutingModule
    ],
    declarations: [SimpleFormsComponent]
})
export class SimpleFormModule {

}
