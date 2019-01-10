import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConnexionMailPage } from '../connexion-mail/connexion-mail';

@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html',
})
export class ConnexionPage {

  header_data: any; // Déclaration options du custom-header

  constructor(public navCtrl: NavController) {
    // Initialisation des valeurs des options du custom-header
    this.header_data = {
      hideBackButton: false,
      withProfile: false,
      withTranslate: true,
      title: "Connexion"
    };
  }

  goToConnexionMailPage(){
    this.navCtrl.push(ConnexionMailPage)
  }
}
