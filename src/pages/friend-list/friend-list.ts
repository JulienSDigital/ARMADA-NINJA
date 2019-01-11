import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-friend-list',
	templateUrl: 'friend-list.html',
})
export class FriendListPage {
	header_data: any;
	constructor(public navCtrl: NavController) {
		this.header_data = {
			hideBackButton: false,
			withProfile: true,
			withTranslate: false,
			title: "Liste d'amis"
		};
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FriendListPage');
	}

}
