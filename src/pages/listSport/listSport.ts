import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { skiPage } from "../Ski/ski";
import { surfPage } from "../surf/surf";
import { randoPage } from "../rando/rando";

@Component({
    selector: 'page-listSport',
    templateUrl: 'listSport.html'
})
export class listSportPage {

    categorieslist = [];
    choice: any;
    classname: String;
    assetsUrl: String;

    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
        this.categorieslist = ["Ski","Surf","Randonnée"];
        this.assetsUrl = "../../assets/imgs/";
    }

    ionViewDidLoad() {
        for(let i = 0;i < this.categorieslist.length; i++) {
            if(this.categorieslist[i]== "Surf") {
                this.classname = this.assetsUrl+ "surf.jpg";
            }
            else if(this.categorieslist[i] == "Ski") {
                this.classname = this.assetsUrl+"ski.png";
            }
            else{
                this.classname = this.assetsUrl+"rando.png";
            }
        }
    }


    requestCategorie(cat){
        let loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'Chargement...'
        });
        loading.present();
        if(cat == 'Surf'){
            this.choice = surfPage;
        }
        else if(cat == 'Ski') {
            this.choice = skiPage;
        }
        else {
            this.choice = randoPage;
        }
        this.navCtrl.push(this.choice, {}, { animate:true, animation:'ios-transition', direction:'forward'});
        loading.dismiss();

    }
}
