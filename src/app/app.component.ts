import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Family } from './family-tree/models/family.model';
import { TreeService } from './services/tree.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'family-tree';
  tree$: Observable<Family>;

  constructor(private treeService: TreeService) {
    this.tree$ = this.treeService.getTree();
    this.tree$.subscribe(tree => console.log(tree));
  }
  ngOnInit(): void {

  }

  onLeafSelected(data) {
    console.log(data);
  }
}
