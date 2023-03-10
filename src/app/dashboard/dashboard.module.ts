import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HistoryComponent } from './history/history.component';

import { HttpClientModule } from '@angular/common/http';
import { CommitsService } from './services/commits.service';

@NgModule({
  declarations: [HistoryComponent],
  imports: [CommonModule, DashboardRoutingModule, HttpClientModule],
  providers: [CommitsService],
})
export class DashboardModule {}
