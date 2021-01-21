import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ToolbarComponent} from './toolbar.component';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SharedModule} from '../../../shared.module';

const MATERIAL_MODULES = [
  MatToolbarModule
];

@NgModule({
  declarations: [
    ToolbarComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ...MATERIAL_MODULES,
    SharedModule
  ],
  exports: [
    ToolbarComponent,
  ],
})
export class ToolbarModule {
}
