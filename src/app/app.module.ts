import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';

import { MailService } from './service/mail/mail.service';
import { RadialProgressChartComponent } from './component/radial-progress-chart/radial-progress-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RadialProgressChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
