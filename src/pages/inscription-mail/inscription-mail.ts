import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-inscription-mail',
  templateUrl: 'inscription-mail.html',
})
export class InscriptionMailPage {

  username:string;
  password:string;
  passwordConfirmation:string;

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

  inscription() {
    console.log("username : " + this.username);
    console.log("password : " + this.password);
    console.log("password confirmation : " + this.passwordConfirmation);
  }

}