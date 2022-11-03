import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Family } from './models/family.model';

@Component({
    selector: 'ft-leaf',
    template: `
    <div>
      <span  *ngFor="let node of child.nodes" class="node"
             [ngClass]="node.relationship ? node.relationship + '-leaf' : ''"
             (click)="_leafSelected(node)" [class]="node.gender">
             <div class="avatar">
                   <img src="/assets/imgs/default.png" alt="avatar" class="avatar">
                 </div>
                 <br>
             {{node.name}}:<br>{{node.gender}}</span>
    </div>
    <ul *ngIf="child.children && child.children.length > 0">
      <li *ngFor="let row of child.children" [ngStyle]="{'width': child.children.length === 1 ? '100%' : 'auto'}">
        <ft-leaf (onLeafSelected)="_leafSelected($event)" [child]="row"></ft-leaf>
      </li>
    </ul>
  `
})
export class LeafComponent {

    @Input() child: Family;
    @Output() onLeafSelected: EventEmitter<Family> = new EventEmitter();

    constructor() { }

    _leafSelected(_leaf) {
        this.onLeafSelected.emit(_leaf);
    }

}