import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';

import { DefaultComponent } from './default.component';

import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardService } from 'src/app/modules/dashboard.service';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { PivotSummaryComponent } from 'src/app/modules/pivot-summary/pivot-summary.component';
import { PivotLogComponent } from 'src/app/modules/pivot-log/pivot-log.component';
import { ActivePivotsComponent } from 'src/app/modules/active-pivots/active-pivots.component';
import { PivotHistoryComponent } from 'src/app/modules/pivot-history/pivot-history.component';

import { PostsComponent } from 'src/app/modules/posts/posts.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    ActivePivotsComponent,
    PivotLogComponent,
    ActivePivotsComponent,
    PivotHistoryComponent,
    PivotSummaryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  providers: [DashboardService],
})
export class DefaultModule {}
