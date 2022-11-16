import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Family } from '../family-tree/models/family.model';
import { TreeNode } from '../family-tree/models/node.model';

@Component({
  selector: 'node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @Input() edit = false;
  @Input() selectedNode: Family | null;
  submitNodes = false;
  submitedMember: TreeNode;
  @Output() updatedNode: EventEmitter<Family> = new EventEmitter<Family>();
  editedMember: TreeNode | null;
  constructor() { }

  ngOnInit(): void {
    if (this.edit) {
      this.editedMember = {
        id: this.selectedNode.nodes[0].id,
        fullName: this.selectedNode.nodes[0].fullName,
        yearsOfLife: this.selectedNode.nodes[0].yearsOfLife,
        gender: this.selectedNode.nodes[0].gender,
        relationship: this.selectedNode.nodes[0].relationship,
      }
    }
    else {
      this.editedMember = {
        id: '',
        fullName: '',
        yearsOfLife: '',
        gender: '',
        relationship: '',
      };
    }
  }

  handleMember(member: TreeNode): void {
    this.submitedMember = member;
  }

  emmitSubmit() {
    this.submitNodes = true;
    setTimeout(() => {
      if (!this.edit) {
        if (!this.selectedNode.children) {
          this.selectedNode.children = [];
        }
        this.selectedNode.children.push({
          id: this.submitedMember.id,
          nodes: [this.submitedMember],
          children: []
        });
        this.updatedNode.emit(this.selectedNode);
      }
      else {
        this.selectedNode.nodes[0].id = this.submitedMember.id;
        this.selectedNode.nodes[0].fullName = this.submitedMember.fullName;
        this.selectedNode.nodes[0].yearsOfLife = this.submitedMember.yearsOfLife;
        this.selectedNode.nodes[0].gender = this.submitedMember.gender;
        const n: TreeNode = {
          id: this.submitedMember.id,
          fullName: this.submitedMember.fullName,
          yearsOfLife: this.submitedMember.yearsOfLife,
          gender: this.submitedMember.gender,
          relationship: this.submitedMember.relationship
        }
        const member = {
          id: this.submitedMember.id,
          nodes: [n],
          children: this.selectedNode.children
        }
        this.updatedNode.emit(member);
      }
    }, 0);
  }

}
