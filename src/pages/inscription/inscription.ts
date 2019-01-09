import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InscriptionMailPage } from '../inscription-mail/inscription-mail';


@Component({
  selector: 'inscription-page',
  templateUrl: 'inscription.html'
})
export class Inscription {

  header_data: any; // Déclaration options du custom-header

  constructor(public navCtrl: NavController) {
    // Initialisation des valeurs des options du custom-header
    this.header_data = {
      hideBackButton: false,
      withProfile: false,
      withTranslate: true,
      title: "Inscription"
    };
  }

  goToInscriptionMailPage(){
    this.navCtrl.push(InscriptionMailPage)
  }

}
