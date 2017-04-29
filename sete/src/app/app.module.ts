import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { FlashCard } from '../components/flash-card/flash-card';
import { Data } from '../providers/data';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyAxofPoEWRcXoT0PdhPx5xVBsQsRwaFoRs",
  authDomain: "hackathon-361a4.firebaseapp.com",
  databaseURL: "https://hackathon-361a4.firebaseio.com",
  projectId: "hackathon-361a4",
  storageBucket: "hackathon-361a4.appspot.com",
  messagingSenderId: "721435096858"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FlashCard
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Data
  ]
})
export class AppModule { }
