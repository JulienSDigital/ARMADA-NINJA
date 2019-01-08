import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConnexionMailPage } from '../connexion-mail/connexion-mail';

@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html',
})
export class ConnexionPage {

  constructor(public navCtrl: NavController) {
  }

  goToConnexionMailPage(){
    this.navCtrl.push(ConnexionMailPage)
  }

}
