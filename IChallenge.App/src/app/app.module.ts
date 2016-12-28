import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { ChallengeService } from './shared';
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
    HomeComponent
  ],
  providers:[
    ChallengeService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }