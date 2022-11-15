import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  nodeForm = new FormGroup({
    fullName: new FormControl(''),
    yearsOfLife: new FormControl(''),
    gender: new FormControl(''),
    relationship: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.nodeForm.value);
  }

}
