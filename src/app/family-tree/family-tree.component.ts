import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Family } from './models/family.model';

@Component({
  selector: 'family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FamilyTreeComponent implements OnInit {

  @Input() family: Family;
  @Output() onLeafSelected: EventEmitter<Family> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  _leafSelected(_leaf) {
    this.onLeafSelected.emit(_leaf);
  }

  _setWidth(child: Family) {
    return child.nodes && child.nodes[0].relationship === 'self' && child.children.length < 2;
  }

}
