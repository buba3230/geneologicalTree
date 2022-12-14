import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'node',
    loadChildren: () => import('./node/node.module').then(m => m.NodeModule)
  },
  {
    path: 'root',
    loadChildren: () => import('./tree-root/tree-root.module').then(m => m.TreeRootModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
