import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Button1Component } from './components/button1/button1.component';
import { Button2Component } from './components/button2/button2.component';
import { Button3Component } from './components/button3/button3.component';
import { Button4Component } from './components/button4/button4.component';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Button1Component,
    Button2Component,
    Button3Component,
    Button4Component,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
