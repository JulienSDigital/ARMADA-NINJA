import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-connexion-mail',
  templateUrl: 'connexion-mail.html',
})
export class ConnexionMailPage {

  username:string;
  password:string;

  constructor(public navCtrl: NavController) {
  }

  login() {
    console.log("username : " + this.username);
    console.log("password : " + this.password);
  }

}
