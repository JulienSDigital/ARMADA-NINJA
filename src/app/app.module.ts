import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { CustomHeader } from "../pages/custom-header/custom-header";
import { Inscription } from "../pages/inscription/inscription";
import { InscriptionMailPage } from "../pages/inscription-mail/inscription-mail";
import { ConnexionPage } from "../pages/connexion/connexion";
import { PhotoHandler } from "../pages/photoHandler/photoHandler";
import { EventPicker } from "../pages/eventPicker/eventPicker";
import { ConnexionMailPage } from "../pages/connexion-mail/connexion-mail";
import { MapPage } from "../pages/map/map";
import { listSportPage } from "../pages/listSport/listSport";
import { surfPage } from "../pages/surf/surf";
import { skiPage } from "../pages/Ski/ski";
import { randoPage } from "../pages/rando/rando";
import { KitchenSinkPage } from "../pages/kitchen-sink/kitchen-sink";
// import { globalServices } from "../pages/services/globalServices";
import { confidentialityPage } from "../pages/confidentiality/confidentiality";

// Module supp ionic
import { SplashScreen } from "@ionic-native/splash-screen";
import { Camera } from "@ionic-native/camera";
import { Geolocation } from "@ionic-native/geolocation";
import { IonicStorageModule } from "@ionic/storage";
import { StatusBar } from "@ionic-native/status-bar";
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {MarkersProvider} from "../providers/markers/markers";
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import {LocationAccuracy} from "@ionic-native/location-accuracy";

var config = {
  apiKey: "<yourapikeyhere>",
  authDomain: "<armada-dev-1546938684577.firebaseapp.com>",
  databaseURL: "<map>",
  projectId: "<projectIdhere>",
  storageBucket: "<oLiKzi3DSYaOiPhqDlW5>",
  messagingSenderId: "<yourmsgingsenderidhere>"
};

@NgModule({
  declarations: [
    MyApp,
    CustomHeader,
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
    InscriptionMailPage,
    MapPage,
    ConnexionPage,
    KitchenSinkPage,
    confidentialityPage,
    // globalServices,
    ConnexionMailPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CustomHeader,
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
    InscriptionMailPage,
    MapPage,
    ConnexionPage,
    KitchenSinkPage,
    confidentialityPage,
    ConnexionMailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    LocationAccuracy,
    NativeGeocoder,
    MarkersProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
