// src/app/app.module.ts: This file contains the imports for all the modules that you want to be globally available. Replace to contents of this file with the following code.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { StocksService } from './services/stocks.service';
import { SummaryComponent } from './components/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [[StocksService]],
  bootstrap: [AppComponent],
})
export class AppModule {}
