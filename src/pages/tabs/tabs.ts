import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { EventPicker } from "../eventPicker/eventPicker"
import { listSportPage } from "../listSport/listSport";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = EventPicker;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = HomePage;
  tab5Root = listSportPage;

  constructor() {}
}
