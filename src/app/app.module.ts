import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

=======
>>>>>>> alex/daniel

import { AppComponent } from './app.component';
import { HostComponent } from './host/host.component';
import { TeamComponent } from './team/team.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';

// Authentication Dependencies
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { masterFirebaseConfig } from './api-keys';
import { AuthenticationService } from './authentication.service';





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
<<<<<<< HEAD
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing,
=======
    AngularFireAuthModule,
    FormsModule,
    // HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
>>>>>>> alex/daniel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
