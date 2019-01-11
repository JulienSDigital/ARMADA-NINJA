import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from "@ionic/storage";
import { TabsPage } from "../pages/tabs/tabs";

import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;
	rootPage: any = TabsPage;
	shownGroup: Object;
	groups: Array<Object> = [
		{libelle: "Group 1", items: [
			{libelle: "option 1", isChecked: true, icon: "body"},
			{libelle: "option 2", isChecked: true, icon: "body"},
			{libelle: "option 3", isChecked: false, icon: "body"}
		]},
		{libelle: "Group 2", items: [
			{libelle: "option 1", isChecked: false, icon: "body"},
			{libelle: "option 2", isChecked: false, icon: "body"}
		]},
		{libelle: "Group 3", items: [
			{libelle: "option 1", isChecked: true, icon: "body"}
		]},
		{libelle: "Group 4", items: [
			{libelle: "option 1", isChecked: true, icon: "body"},
			{libelle: "option 2", isChecked: false, icon: "body"},
			{libelle: "option 3", isChecked: true, icon: "body"},
			{libelle: "option 4", isChecked: true, icon: "body"}
		]}
	];
	pages:Array<Object> = [
		{ libelle: 'Accueil', icon: 'home', component: HomePage },
		{ libelle: 'Contact', icon: 'contacts', component: ContactPage },
		{ libelle: 'About', icon: 'help', component: AboutPage },
	];

	constructor(
		platform: Platform,
		statusBar: StatusBar,
		splashScreen: SplashScreen,
		storage: Storage
	  ) {
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			statusBar.styleDefault();
			splashScreen.hide();
			statusBar.show();
      		statusBar.backgroundColorByHexString("#ffffff");
		});
		storage.clear();
		storage.set("recordTimer", null);
		storage.set("currentRide", []);
		storage.set("recording", false);
	}

	openPage(page: any) {
		this.nav.push(page.component);
	}

	toggleGroup = function(group: Object) {
		this.shownGroup = (this.isGroupShown(group) ? null : group);
	}

	isGroupShown = function(group: Object) {
		return this.shownGroup === group;
	}
}