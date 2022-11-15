import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Family } from '../family-tree/models/family.model';
import { TreeNode } from '../family-tree/models/node.model';
import { TreeService } from '../services/tree.service';

@Component({
  selector: 'app-tree-root',
  templateUrl: './tree-root.component.html',
  styleUrls: ['./tree-root.component.scss']
})
export class TreeRootComponent implements OnInit {
  fam1: TreeNode;
  fam2: TreeNode;
  submitNodes = false;
  @Output() triggerUpdate: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router, private treeService: TreeService) { }

  ngOnInit(): void {
    this.triggerUpdate.emit(false);
  }

  hendleLeaf(leaf: TreeNode, num: number): void {
    if (num === 1) {
      this.fam1 = leaf;
      return;
    }
    this.fam2 = leaf;
  }

  createRoot(): void {
    this.submitNodes = true;

    setTimeout(() => {
      delete this.fam1.relationship;
      delete this.fam2.relationship;
      const root: Family = { id: "1", nodes: [this.fam1, this.fam2], children: [] };
      this.treeService.createRoot(root).pipe(take(1)).subscribe(() => {
        this.triggerUpdate.emit(true);
        this.router.navigate(['/']);
      });
    }, 0);
  }

}
