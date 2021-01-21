import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {QuicklinkStrategy} from 'ngx-quicklink';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    loadChildren: () => import('@angular-boilerplate/angular-boilerplate/posts').then(m => m.AngularBoilerplatePostsModule),
    data: {},
  },
];

const routerConfig: ExtraOptions = {
  initialNavigation: 'enabled',
  preloadingStrategy: QuicklinkStrategy,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerConfig)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
