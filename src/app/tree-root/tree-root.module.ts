import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TreeRootComponent } from './tree-root.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LeafFormComponent } from '../family-tree/leaf-form.component';

const routes: Routes = [
    {
        path: '',
        component: TreeRootComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
    ],
    declarations: [TreeRootComponent, LeafFormComponent],
    exports: [TreeRootComponent]
})
export class TreeRootModule { }