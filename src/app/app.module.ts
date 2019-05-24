import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';

import { DataTablesModule } from 'angular-datatables';
import { ChartModule } from 'angular-highcharts';
import { HighchartsService } from './highcharts.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    ChartModule
  ],
  providers: [HighchartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
