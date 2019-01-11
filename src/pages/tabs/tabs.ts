import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { EventPicker } from "../eventPicker/eventPicker"
import { listSportPage } from "../listSport/listSport";
import {MapPage} from "../map/map";
import { KitchenSinkPage } from "../kitchen-sink/kitchen-sink";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = EventPicker;
  tab5Root = listSportPage;
  tab6Root = MapPage;
  tab7Root = KitchenSinkPage;

  constructor() {}
}
