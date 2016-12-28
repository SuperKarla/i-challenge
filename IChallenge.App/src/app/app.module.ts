import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';

import { HomeComponent } from './home';
import { ChallengeService } from './shared';


import { MenuComponent } from './menu';

import { routing } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    MaterialModule.forRoot()
  ],
  declarations: [
    // components
    AppComponent,
    HomeComponent,
    MenuComponent
  ],
  providers:[
    ChallengeService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }