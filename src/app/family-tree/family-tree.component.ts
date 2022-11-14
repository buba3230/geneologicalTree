import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Family } from './models/family.model';
import { LeafClass } from './models/leaf-abstract-class';

@Component({
  selector: 'family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FamilyTreeComponent extends LeafClass implements OnInit {

  @Input() family: Family;
  @Output() onLeafSelected: EventEmitter<Family> = new EventEmitter();

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  _leafSelected(_leaf: Family) {
    this.onLeafSelected.emit(_leaf);
  }

  _setWidth(child: Family) {
    return child.nodes && child.nodes[0].relationship === 'self' && child.children.length < 2;
  }

}
