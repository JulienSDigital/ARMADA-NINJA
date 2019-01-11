import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { EventPicker } from "../eventPicker/eventPicker"
import { listSportPage } from "../listSport/listSport";
import { MapPage } from "../map/map";
import { HomeChatPage } from "../home-chat/home-chat";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EventPicker;
  tab3Root = listSportPage;
  tab4Root = MapPage;
  tab5Root = HomeChatPage;

  constructor() {}
}
