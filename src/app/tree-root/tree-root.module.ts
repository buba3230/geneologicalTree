import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TreeRootComponent } from './tree-root.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LeafFormModule } from '../family-tree/leaf-form.module';

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
        LeafFormModule
    ],
    declarations: [TreeRootComponent],
    exports: [TreeRootComponent]
})
export class TreeRootModule { }