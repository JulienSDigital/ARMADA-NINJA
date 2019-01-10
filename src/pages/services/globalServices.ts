/**
 * Created by Julien on 10/01/2019.
 */
import { Injectable} from '@angular/core';
import { NavController, AlertController, App } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
import { Network } from '@ionic-native/network';


@Injectable()
export class globalServices {
    public user: any = {
        lastname: "X",
        firstname: "X",
        mail: "kd@ze.fr",
        phone: "0638383838",
        address:"3 rue montpellier"
    }
    public langue;

    constructor(public network: Network, protected app: App, public alertCtrl: AlertController, public translate: TranslateService) {
        this.translate = translate;

    }


    navCtrl(): NavController {
        return this.app.getRootNav();
    }

    getUser(){
        window.localStorage.getItem('user');
    }


    ifConnect() {
        if(this.getUser()){
            return true;
        } else {
            return false;
        }
    }

    checkConnection(){
    console.log("on passe dans la connexion");
        let disconnect = this.network.onDisconnect().subscribe(() => {
            console.log('erreur conexion');
            let alert = this.alertCtrl.create({
                title: 'Déconnecté',
                message: 'Aucun réseau detecté',
                buttons: ['Ok']
            }).present()
        });
        disconnect.unsubscribe();


        let connect = this.network.onConnect().subscribe(() => {
            console.log('Connecte a internet');
            setTimeout(() => {
                if (this.network.type === 'wifi') {
                    console.log('Connecte en wifi');
                } else if(this.network.type === "4g"){
                    console.log('en 4g');
                }
            }, 3000);
        });
        connect.unsubscribe();

    }

    selectEn() {
        this.translate.use('en');
        this.langue = "en";
        window.localStorage.setItem('langue', 'en');
    }

    selectFr() {
        this.translate.use('fr');
        this.langue = "fr";
        window.localStorage.setItem('langue', 'fr');
    }


    validateEmail(mail) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (mail.match(mailformat)) {
            return (true)
        }
        return (false)
    }


}
