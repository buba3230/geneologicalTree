import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FamilyTreeComponent } from './family-tree.component';
import { LeafComponent } from './leaf.component';

@NgModule({
    declarations: [FamilyTreeComponent, LeafComponent],
    imports: [
        CommonModule,
    ],
    exports: [FamilyTreeComponent]
})
export class FamilyTreeModule { }