import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HostComponent } from './host/host.component';
import { TeamComponent } from './team/team.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';


import { AngularFireAuthModule } from 'angularfire2/auth';
import { masterFirebaseConfig } from './api-keys';





export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};



@NgModule({
  declarations: [
    AppComponent,
    HostComponent,
    TeamComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    FormsModule,
    // HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
