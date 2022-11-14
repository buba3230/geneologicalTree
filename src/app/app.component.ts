import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Family } from './family-tree/models/family.model';
import { TreeNode } from './family-tree/models/node.model';
import { TreeService } from './services/tree.service';

export type Operation = 'create' | 'edit' | null;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'family-tree';
  tree$: Observable<Family>;

  operation: Operation = null;

  constructor(private treeService: TreeService) {
    this.tree$ = this.treeService.getTree();
  }
  ngOnInit(): void {

  }

  onLeafSelected(familyMember: TreeNode) {
    console.log(familyMember);
  }

  onCreate(): void {
    if (this.operation === null) {
      this.operation = 'create';
    }
    else {
      this.operation = null;
    }
  }
}
