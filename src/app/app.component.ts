import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'family-tree';

  onLeafSelected(data) {
    console.log(data);
  }

  family = {
    nodes: [
      { name: 'Father', gender: 'male' },
      { name: 'Mather', gender: 'female' }
    ],
    children: [
      {
        nodes: [
          { name: 'Son', gender: 'male', relationship: 'self' },
        ],
        children: [
          {
            nodes: [{ name: 'Grand Child 1', gender: 'female' }], children:
              [{ nodes: [{ name: 'Grand Grand Child 1', gender: 'male' }] },
              { nodes: [{ name: 'Grand Grand Child 2', gender: 'female' }] }]
          },
          { nodes: [{ name: 'Grand Child 2', gender: 'female' }] },
          { nodes: [{ name: 'Grand Child 3', gender: 'male' }] }
        ]
      },
      {
        nodes: [
          { name: 'Doughter', gender: 'female', relationship: 'self' },
        ],
        children: [
          { nodes: [{ name: 'Grand Child 4', gender: 'male' }] },
          { nodes: [{ name: 'Grand Child 6', gender: 'female' }] }
        ]
      },
      {
        nodes: [
          { name: 'Doughter', gender: 'female', relationship: 'self' },
        ],
        children: [
          { nodes: [{ name: 'Grand Child 7', gender: 'male' }] },
          { nodes: [{ name: 'Grand Child 8', gender: 'female' }] }
        ]
      }]
  };

}
