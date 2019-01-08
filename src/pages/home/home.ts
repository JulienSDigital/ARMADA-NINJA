import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Inscription } from '../inscription/inscription';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {


  //inscription=Inscription;
  constructor(public navCtrl: NavController) {

  }

  go2inscription(){
  	this.navCtrl.push(Inscription)
  }

}
