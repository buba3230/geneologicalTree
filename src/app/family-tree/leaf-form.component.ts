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
                <label for="id">ID: </label>
            </td>
            <td>
                <input id="id" type="text" formControlName="id" [readonly]="_root" [(ngModel)]='_editNode.id'>
            </td>
        </tr>
        <tr>
            <td>
                <label for="fullName">Full name: </label>
            </td>
            <td>
                <input id="fullName" type="text" formControlName="fullName" [(ngModel)]='_editNode.fullName'>
            </td>
        </tr>
        <tr>
            <td>
                <label for="yearsOfLife">Years of life: </label>
            </td>
            <td>
                <input id="lyearsOfLife" type="text" formControlName="yearsOfLife" [(ngModel)]='_editNode.yearsOfLife'>
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
    </table>
    <ng-container *ngIf="visibleSubmit">
        <button type="submit" class="btn">Save</button>
    </ng-container>
  </form>
  `,
    styleUrls: []
})
export class LeafFormComponent implements OnInit {
    _root = false;
    @Input() set root(value: boolean) {
        this._root = value;
        if (value) {
            this.nodeForm.get('id').setValue(1);
        }

    };
    @Input() visibleSubmit = false;
    @Input() set emmitSubmit(value: boolean) {
        if (value) {
            this.onSubmit();
        }
    }
    _editNode: TreeNode;
    @Input() set editedNode(node: TreeNode | null) {
        if (!node) {
            this._editNode = {
                id: '',
                fullName: '',
                yearsOfLife: '',
                gender: '',
                relationship: '',
            }
        }
        else {
            this._editNode = {
                id: node.id,
                fullName: node.fullName,
                yearsOfLife: node.yearsOfLife,
                gender: node.gender,
                relationship: node.relationship,
            }
        }
    }
    @Output() leaf: EventEmitter<TreeNode> = new EventEmitter<TreeNode>();
    nodeForm = new FormGroup({
        id: new FormControl(''),
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
