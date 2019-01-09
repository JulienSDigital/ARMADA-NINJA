import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { skiPage } from "../Ski/ski";
import { surfPage } from "../surf/surf";
import { randoPage } from "../rando/rando";

@Component({
    selector: 'page-listSport',
    templateUrl: 'listSport.html'
})
export class listSportPage {

    constructor(public navCtrl: NavController) {

    }


    goToSki() {
        this.navCtrl.push(skiPage);
    }
    goToSurf() {
        this.navCtrl.push(surfPage);
    }
    goToRando() {
        this.navCtrl.push(randoPage);
    }
}
