import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Inscription } from '../inscription/inscription';
import { ConnexionPage } from '../connexion/connexion';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {

<<<<<<< HEAD
	constructor(public navCtrl: NavController) {
=======

  constructor(public navCtrl: NavController) {
>>>>>>> 8ea14e928473a624c9babffdb969e261b26133f9

	}

  go2inscription(){
  	this.navCtrl.push(Inscription)
  }
  goToConnexionPage(){
    this.navCtrl.push(ConnexionPage)
  }

}
