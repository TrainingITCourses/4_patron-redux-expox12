import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './launches/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './store/api.service';

import { CounterComponent, FilterRadioBoxComponent, FilterSelectComponent, LaunchesListComponent, WebSearchComponent } from "./shared/index";
import { GlobalStore } from './store/global-store.state';

@NgModule({
  declarations: [
    AppComponent,
    WebSearchComponent,
    HomeComponent,
    LaunchesListComponent,
    CounterComponent,
    FilterRadioBoxComponent,
    FilterSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService, GlobalStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
