import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {globalServices} from "../services/globalServices";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public global: globalServices) {

  }

    ionViewDidLoad(){
      this.global.checkConnection();
    }
}
