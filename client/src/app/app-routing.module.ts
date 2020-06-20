import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DefaultComponent } from './layout/default/default.component';
import { LoginComponent } from './layout/login/login.component';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PivotSummaryComponent } from './modules/pivot-summary/pivot-summary.component';
import { PivotLogComponent } from './modules/pivot-log/pivot-log.component';
import { ActivePivotsComponent } from './modules/active-pivots/active-pivots.component';
import { PivotHistoryComponent } from './modules/pivot-history/pivot-history.component';

import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'pivot-summary',
        component: PivotSummaryComponent,
      },
      {
        path: 'pivot-log',
        component: PivotLogComponent,
      },
      {
        path: 'active-pivots',
        component: ActivePivotsComponent,
      },
      {
        path: 'pivot-history',
        component: PivotHistoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
