import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TreeNode } from './models/node.model';

@Component({
    selector: 'leaf-form',
    template: `
  <form [formGroup]="nodeForm" (ngSubmit)="onSubmit()" class="form">
    <table>
        <tr>
            <td>
                <label for="fullName">Full name: </label>
            </td>
            <td>
                <input id="fullName" type="text" formControlName="fullName">
            </td>
        </tr>
        <tr>
            <td>
                <label for="yearsOfLife">Years of life: </label>
            </td>
            <td>
                <input id="lyearsOfLife" type="text" formControlName="yearsOfLife">
            </td>
        </tr>
        <tr>
            <td>
                <label for="gender">Gender: </label>
            </td>
            <td>
                <select id="gender" formControlName="gender" style="width: 100%">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>
                <label for="relationship">Relationship: </label>
            </td>
            <td>
                <input id="relationship" type="text" formControlName="relationship">
            </td>
        </tr>
    </table>
    <ng-container *ngIf="visibleSubmit">
        <button type="submit" class="btn">Save</button>
    </ng-container>
  </form>
  `,
    styleUrls: []
})
export class LeafFormComponent implements OnInit {
    @Input() visibleSubmit = false;
    @Input() set emmitSubmit(value: boolean) {
        if (value) {
            this.onSubmit();
        }
    }
    @Output() leaf: EventEmitter<TreeNode> = new EventEmitter<TreeNode>();
    nodeForm = new FormGroup({
        fullName: new FormControl(''),
        yearsOfLife: new FormControl(''),
        gender: new FormControl(''),
        relationship: new FormControl(''),
    });

    constructor() { }

    ngOnInit(): void {
    }

    onSubmit() {
        this.leaf.emit(this.nodeForm.value);
    }

}
