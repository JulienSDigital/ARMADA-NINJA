import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { EventPicker } from "../eventPicker/eventPicker"
import { listSportPage } from "../listSport/listSport";
import {MapPage} from "../map/map";
import { KitchenSinkPage } from "../kitchen-sink/kitchen-sink";
import {Openmap} from "../OpenMap/openmap";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = EventPicker;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = HomePage;
  tab5Root = listSportPage;
  tab6Root = MapPage;
  tab7Root = KitchenSinkPage;
  tab8Root = Openmap;

  constructor() {}
}
