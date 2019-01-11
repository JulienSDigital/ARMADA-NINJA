/**
 * Created by Julien on 10/01/2019.
 */
import { Injectable} from '@angular/core';
import { NavController, AlertController, App } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";


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

    constructor(private navCtrl: NavController, protected app: App, public alertCtrl: AlertController, public translate: TranslateService) {
        this.translate = translate;

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
