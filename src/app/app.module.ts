import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyTreeModule } from './family-tree/family-tree.module';
import { TreeService } from './services/tree.service';
import { HttpClientModule } from '@angular/common/http';
import { TreeRootModule } from './tree-root/tree-root.module';
import { NodeModule } from './node/node.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FamilyTreeModule,
    TreeRootModule,
    NodeModule
  ],
  providers: [TreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
