import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { ChatRoomPage } from '../chat-room/chat-room';

@Component({
  selector: 'page-home(chat',
  templateUrl: 'home-chat.html'
})
export class HomeChatPage {
  nickname = '';
  header_data: any; // Déclaration options du custom-header

  constructor(public navCtrl: NavController, private socket: Socket) {
    this.header_data = {
      hideBackButton: false,
      withProfile: true,
      withTranslate: false,
      title: "Rejoindre le chat"
    };
  }

  joinChat() {
    this.socket.connect();
    this.socket.emit('set-nickname', this.nickname);
    console.log({ nickname: this.nickname });
    this.navCtrl.push(ChatRoomPage, { nickname: this.nickname });
  }
}