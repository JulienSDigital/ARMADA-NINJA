import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Inscription } from '../inscription/inscription';
import { ConnexionPage } from '../connexion/connexion';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
  className: string = 'one-class';
  constructor(public navCtrl: NavController) {
    this.changebackground();
	}

  go2inscription(){
  	this.navCtrl.push(Inscription)
  }
  goToConnexionPage(){
    this.navCtrl.push(ConnexionPage)
  }
  changebackground() {
    setTimeout( () => {
      this.className = 'another-class';
    }, 2000);
  }
}
