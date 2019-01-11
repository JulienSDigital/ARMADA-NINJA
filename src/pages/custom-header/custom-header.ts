import { Component, Input } from '@angular/core';
import { NavController, MenuController, ToastController, ActionSheetController  } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
/*
* ===================================Header customizable===========================================
* Afin d'utiliser le composant custom-header :
* 
* Dans le controlleur (*.ts) :
* - déclarer un attribut "header_data: any" en tête de votre classe
* - dans le constructeur initialiser un objet JS à "header_data",
* cette objet contiendra toutes les options relative au header :
*     - hideBackButton: booleen => Possibilité d'afficher/cacher le bouton de retour
*     - withProfile: booleen => Possibilité d'afficher/cacher le bouton du profil utilisateur
*     - withTranslate: booleen => Possibilité d'afficher/cacher le bouton de sélection de langues
*     - title: string => Possibilité d'attribué un titre au header
*
*
* Dans le template (*.html) :
* - CTRL-C/CTRL-V ce qui suit en tête de votre page :
    <ion-header>
        <custom-header [header]="header_data"></custom-header>
    </ion-header>
*
* Cf. exemple dans la page kitchen-sink (dernier element de "tabs")
* =================================================================================================
*/

@Component({
    selector: 'custom-header',
    templateUrl: 'custom-header.html'
})
export class CustomHeader {
    private header_data: any;
    private actionSheet: any;
    private langs: Array<Object> = [
        {pfx: "fr", libelle: "Français"},
        {pfx: "en", libelle: "Anglais"},
    ];

    constructor(
        public navCtrl: NavController,
        public menuCtrl: MenuController,
        private toastCtrl: ToastController,
        private actSheetCtrl: ActionSheetController
    ) { 
    }
    
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
   
	toggleMenu() {
		this.menuCtrl.toggle();
	}

    chooseLanguage(lang: string) {
        // REQUEST AJAX WITH LANGUAGE
        // @params lang: "fr" or "en".
        const langs: Object = {
            fr: "Français",
            en: "Anglais"
        }
        this.presentToast(langs[lang]);
    }

    presentToast(lang: string) {
        let toast: any = this.toastCtrl.create({
            message: `Vous avez choisi ${lang}`,
            duration: 3000,
            position: 'bottom'
        });
      
        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });
      
        toast.present();
    }

    presentActionSheet() {
        this.buildActionSheet();
        this.actionSheet.present();
    }

    buildActionSheet() {
        const buttons = this.langs.map((lang: Object) => {
            return {
                text: lang["libelle"],
                role: lang["pfx"],
                handler: () => {
                    this.presentToast(lang["libelle"]);
                }
            };
        });
        this.actionSheet = this.actSheetCtrl.create({
            title: 'Choisissez votre langue',
            buttons: buttons
        });
    }
}