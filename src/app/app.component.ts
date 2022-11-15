import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
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
  selectedMember: Family | null;
  operation: Operation = null;

  constructor(private treeService: TreeService, private router: Router) {

  }
  ngOnInit(): void {
    this.operation = null;
    this.tree$ = this.treeService.getTree();
  }

  onLeafSelected(familyMember: TreeNode) {
    this.findMember(familyMember);
  }

  findMember(familyMember: TreeNode): void {
    this.tree$.pipe(take(1)).subscribe(
      family => {
        const result = this.searchTree(family, familyMember);
        if (this.selectedMember) {
          this.selectedMember = null;
        }
        else {
          this.selectedMember = result;
        }

      });
  }

  searchTree(member: Family, familyMember: TreeNode): Family {
    const people = member?.nodes.find(m => m.fullName === familyMember.fullName && m.yearsOfLife === familyMember.yearsOfLife);
    if (people) {
      return member;
    } else if (member?.children != null) {
      var i;
      var result = null;
      for (i = 0; result == null && i < member.children.length; i++) {
        result = this.searchTree(member.children[i], familyMember);
      }
      return result;
    }
    return null;
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

  updatePropertyById(node: Family, data: Family, property: string, value: Family[]) {
    if (data.nodes[0].fullName == node.nodes[0].fullName && data.nodes[0].yearsOfLife == node.nodes[0].yearsOfLife) {
      data[property] = value;
    }
    if (data.children !== undefined && data.children.length > 0) {
      for (let i = 0; i < data.children.length; i++) {
        data.children[i] = this.updatePropertyById(node, data.children[i], property, value);
      }
    }

    return data;
  }

  handleUpdateNode(node: Family): void {
    console.log(node);
    this.tree$.pipe(take(1)).subscribe(
      family => {
        const res = this.updatePropertyById(node, family, 'children', node.children);
        this.operation = null;
        this.selectedMember = null;
        this.treeService.updateRoot(res).pipe(take(1)).subscribe();
        this.tree$ = this.treeService.getTree();
      });

  }
}