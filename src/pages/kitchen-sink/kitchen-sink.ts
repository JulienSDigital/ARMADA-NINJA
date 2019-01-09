import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  KITCHEN SINK
  Contenant des exemples de modules/features
*/

@Component({
  selector: 'page-kitchen-sink',
  templateUrl: 'kitchen-sink.html',
})
export class KitchenSinkPage {
  header_data: any; // Déclaration options du custom-header
  constructor(public navCtrl: NavController) {
    // Initialisation des valeurs des options du custom-header
    this.header_data = {
      hideBackButton: false,
      withProfile: false,
      withTranslate: true,
      title: "KitchenSink"
    };
  }

}
