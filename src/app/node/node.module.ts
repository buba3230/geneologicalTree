import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NodeComponent } from './node.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LeafFormModule } from '../family-tree/leaf-form.module';

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
        LeafFormModule
    ],
    declarations: [NodeComponent],
    exports: [NodeComponent]
})
export class NodeModule { }