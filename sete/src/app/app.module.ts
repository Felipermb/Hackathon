import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DescricaoEnergia } from '../pages/descricao-energia/descricao-energia';

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
    DescricaoEnergia
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DescricaoEnergia
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
