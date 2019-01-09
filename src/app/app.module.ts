import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CustomHeader } from '../pages/custom-header/custom-header';
import { Inscription } from '../pages/inscription/inscription';
import { ConnexionPage } from '../pages/connexion/connexion';

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
import { KitchenSinkPage } from "../pages/kitchen-sink/kitchen-sink";

@NgModule({
  declarations: [
    MyApp,
    CustomHeader,
    AboutPage,
    ContactPage,
    HomePage,
    EventPicker,
    PhotoHandler,
    TabsPage,
    listSportPage,
    surfPage,
    skiPage,
    randoPage,
    Inscription,
    MapPage,
    ConnexionPage,
    KitchenSinkPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CustomHeader,
    AboutPage,
    ContactPage,
    HomePage,
    EventPicker,
    PhotoHandler,
    TabsPage,
    listSportPage,
    surfPage,
    skiPage,
    randoPage,
    Inscription,
    MapPage,
    ConnexionPage,
    KitchenSinkPage
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
