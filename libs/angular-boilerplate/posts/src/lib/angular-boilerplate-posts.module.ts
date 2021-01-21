import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularBoilerplatePostsComponent } from './angular-boilerplate-posts.component';
import { AngularBoilerplatePostsRoutingModule } from './angular-boilerplate-posts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AngularBoilerplatePostsRoutingModule
  ],
  declarations: [
    AngularBoilerplatePostsComponent
  ]
})
export class AngularBoilerplatePostsModule {
}
