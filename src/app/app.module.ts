import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
<<<<<<< HEAD
import { CustomHeader } from '../pages/custom-header/custom-header';
=======
import { Inscription } from '../pages/inscription/inscription';
import { ConnexionPage } from '../pages/connexion/connexion';
>>>>>>> 8ea14e928473a624c9babffdb969e261b26133f9

import { EventPicker } from "../pages/eventPicker/eventPicker";
import { PhotoHandler } from "../pages/photoHandler/photoHandler";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { MapPage } from "../pages/map/map";

import { Camera } from "@ionic-native/camera";
// import { Geolocation } from "@ionic-native/geolocation";
import { listSportPage } from "../pages/listSport/listSport";
import { surfPage } from "../pages/surf/surf";
import { skiPage } from "../pages/Ski/ski";
import { randoPage } from "../pages/rando/rando";
import { GoogleMaps } from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
<<<<<<< HEAD
    TabsPage,
    CustomHeader
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
=======
    EventPicker,
    PhotoHandler,
    TabsPage,
    listSportPage,
    surfPage,
    skiPage,
    randoPage,
    Inscription,
    MapPage,
    ConnexionPage
>>>>>>> 8ea14e928473a624c9babffdb969e261b26133f9
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
<<<<<<< HEAD
    TabsPage,
    CustomHeader
=======
    EventPicker,
    PhotoHandler,
    TabsPage,
    listSportPage,
    surfPage,
    skiPage,
    randoPage,
    Inscription,
    MapPage,
    ConnexionPage
>>>>>>> 8ea14e928473a624c9babffdb969e261b26133f9
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    GoogleMaps,
    // Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
