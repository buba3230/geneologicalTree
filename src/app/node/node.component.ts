import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Family } from '../family-tree/models/family.model';
import { TreeNode } from '../family-tree/models/node.model';

@Component({
  selector: 'node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @Input() selectedNode: Family | null;
  submitNodes = false;
  submitedMember: TreeNode;
  @Output() updatedNode: EventEmitter<Family> = new EventEmitter<Family>();
  constructor() { }

  ngOnInit(): void {
  }

  handleMember(member: TreeNode): void {
    this.submitedMember = member;
  }

  emmitSubmit() {
    this.submitNodes = true;
    setTimeout(() => {
      if (!this.selectedNode.children) {
        this.selectedNode.children = [];
      }
      this.selectedNode.children.push({
        id: this.submitedMember.id,
        nodes: [this.submitedMember],
        children: []
      });
      this.updatedNode.emit(this.selectedNode);
    }, 0);
  }

}
