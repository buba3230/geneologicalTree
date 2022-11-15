import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { LeafFormComponent } from './leaf-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [LeafFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [LeafFormComponent]
})
export class LeafFormModule { }