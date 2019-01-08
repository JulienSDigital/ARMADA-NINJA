import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';

@Component({
    selector: 'custom-header',
    templateUrl: 'custom-header.html'
})
export class CustomHeader {
    private header_data: any;
    private imgSrc: string = "../../assets/imgs/logo-header.png";

    constructor(public navCtrl: NavController) { }
    
    @Input()
    set header(header_data: any) {
        this.header_data = header_data;
    }
    get header(): any {
        return this.header_data;
    }

    goHome() {
        this.navCtrl.setRoot(HomePage);
    }

    goProfil() {
        this.navCtrl.push(ContactPage);
    }

    chooseLanguage(lang: string) {
        // REQUEST AJAX WITH LANGUAGE
        // @params lang: "fr" or "en".
        const langs: Object = {
            fr: "Français",
            en: "English"
        }
        alert(langs[lang]);
    }
}