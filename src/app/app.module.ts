import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {IonicApp, IonicModule, IonicErrorHandler, IonicPageModule} from "ionic-angular";
import { MyApp } from "./app.component";

import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { CustomHeader } from "../pages/custom-header/custom-header";
import { Inscription } from "../pages/inscription/inscription";
import { InscriptionMailPage } from "../pages/inscription-mail/inscription-mail";
import { ConnexionPage } from "../pages/connexion/connexion";
import { ConnexionMailPage } from "../pages/connexion-mail/connexion-mail";

import { EventPicker } from "../pages/eventPicker/eventPicker";
import { PhotoHandler } from "../pages/photoHandler/photoHandler";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { MapPage } from "../pages/map/map";

import { Camera } from "@ionic-native/camera";
import { Geolocation } from "@ionic-native/geolocation";
import { listSportPage } from "../pages/listSport/listSport";
import { surfPage } from "../pages/surf/surf";
import { skiPage } from "../pages/Ski/ski";
import { randoPage } from "../pages/rando/rando";
import { CameraPosition, GoogleMaps, MarkerOptions } from "@ionic-native/google-maps";
import { KitchenSinkPage } from "../pages/kitchen-sink/kitchen-sink";
import { IonicStorageModule } from "@ionic/storage";
import { globalServices } from "../pages/services/globalServices";
import { confidentialityPage } from "../pages/confidentiality/confidentiality";
import { FriendListPage } from "../pages/friend-list/friend-list";

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { ChatRoomPage } from "../pages/chat-room/chat-room";
import { HomeChatPage } from "../pages/home-chat/home-chat";
const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

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
    ConnexionMailPage,
    FriendListPage,
    ChatRoomPage,
    HomeChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    SocketIoModule.forRoot(config),
    IonicPageModule.forChild(HomeChatPage),
    IonicPageModule.forChild(ChatRoomPage)
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
    ConnexionMailPage,
    FriendListPage,
    ChatRoomPage,
    HomeChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    GoogleMaps,
    globalServices,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
