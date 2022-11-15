import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NodeComponent } from './node.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: NodeComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
    ],
    declarations: [NodeComponent],
    exports: [NodeComponent]
})
export class NodeModule { }