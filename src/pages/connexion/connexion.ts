import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {globalServices} from "../services/globalServices";

@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html',
})
export class ConnexionPage {

  constructor(public navCtrl: NavController, public global: globalServices) {
  }

    ionViewDidLoad(){
    this.global.checkConnection();
    }
}
