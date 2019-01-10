import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-confidentiality',
    templateUrl: 'confidentiality.html'
})
export class confidentialityPage {


    all:boolean;
    friends: boolean;
    portee: number;
    constructor(public navCtrl: NavController) {
        this.all = false;
        this.friends = false;
    }

    checkConfidentiality(){
        if(this.all){
            this.portee = 1;
        } else if(this.friends) {
            this.portee = 2;
        } else {
            this.portee = 0;
        }
    }

}
