import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Family } from './models/family.model';
import { LeafClass } from './models/leaf-abstract-class';

@Component({
  selector: 'tree-leaf',
  template: `
    <div>
      <span  *ngFor="let node of child.nodes" class="node"
             [ngClass]="node.relationship ? node.relationship + '-leaf' : ''"
             (click)="_leafSelected(node)" [class]="node.gender">
             <div class="avatar">
                   <img src="/assets/imgs/default.png" alt="avatar" class="avatar">
                 </div>
                 <br>
                 {{child.id}} ) {{node.fullName}}:<br>{{node.gender}}<br>{{node.yearsOfLife}}</span>
    </div>
    <ul *ngIf="child.children && child.children.length > 0">
      <li *ngFor="let row of child.children" [ngStyle]="{'width': child.children.length === 1 ? '100%' : 'auto'}">
        <tree-leaf (onLeafSelected)="_leafSelected($event)" [child]="row"></tree-leaf>
      </li>
    </ul>
  `
})
export class LeafComponent extends LeafClass {

  @Input() child: Family;
  @Output() onLeafSelected: EventEmitter<Family> = new EventEmitter();

  constructor() {
    super();
  }

  _leafSelected(_leaf: Family) {
    this.onLeafSelected.emit(_leaf);
  }

}