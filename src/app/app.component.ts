import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Family } from './family-tree/models/family.model';
import { TreeNode } from './family-tree/models/node.model';
import { TreeService } from './services/tree.service';

export type Operation = 'createLeaf' | 'createRoot' | 'edit' | null;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tree$: Observable<Family>;

  operation: Operation = null;

  constructor(private treeService: TreeService, private router: Router) {

  }
  ngOnInit(): void {
    this.operation = null;
    this.tree$ = this.treeService.getTree();
  }

  onLeafSelected(familyMember: TreeNode) {
    console.log(familyMember);
  }

  onCreate(): void {
    if (this.operation === null) {
      this.operation = 'createLeaf';
      this.router.navigate(['node']);
    }
    else {
      this.operation = null;
      this.router.navigate(['/']);
    }
  }

  onClear(): void {
    const confirm = window.confirm('Are you shure !!! ???')
    if (confirm) {
      this.operation = null;
      this.tree$ = this.treeService.clearTree(1);
    }
  }

  onCreateRoot(): void {
    if (this.operation === null) {
      this.operation = 'createRoot';
      this.router.navigate(['root']);
    }
    else {
      this.operation = null;
      this.router.navigate(['/']);
    }
  }

  handleUpdate(value: boolean): void {
    if (value) {
      this.ngOnInit();
    }
  }
}
