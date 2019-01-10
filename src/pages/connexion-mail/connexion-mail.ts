import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-connexion-mail',
  templateUrl: 'connexion-mail.html',
})
export class ConnexionMailPage {

  username:string;
  password:string;
  header_data: any; // Déclaration options du custom-header

  constructor(public navCtrl: NavController) {
    // Initialisation des valeurs des options du custom-header
    this.header_data = {
      hideBackButton: false,
      withProfile: false,
      withTranslate: false,
      title: "Connexion"
    };
  }

  login() {
    console.log("username : " + this.username);
    console.log("password : " + this.password);
  }

}
