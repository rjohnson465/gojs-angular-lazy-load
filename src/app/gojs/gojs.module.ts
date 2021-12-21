import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GojsComponent } from './gojs.component';
import { InspectorComponent } from '../inspector/inspector.component';
import { InspectorRowComponent } from '../inspector/inspector-row.component';
import { GojsAngularModule } from 'gojs-angular';

const routes: Routes = [
  { path: '', component: GojsComponent }
];

@NgModule({
  declarations: [
    GojsComponent,
    InspectorComponent,
    InspectorRowComponent
  ],
  imports: [
    CommonModule,
    GojsAngularModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class GojsModule { }
