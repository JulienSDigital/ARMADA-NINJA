import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  Marker,
} from '@ionic-native/google-maps';
import { Component } from "@angular/core/";


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  map: GoogleMap;
  constructor() { }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    // This code is necessary for browser
    // Environment.setEnv({
    //   'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBMPArk41skPfc_ewjTu6I586mT8lV6Xy4',
    //   'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBMPArk41skPfc_ewjTu6I586mT8lV6Xy4',
    //   'API_KEY_FOR_ANDROID' : 'AIzaSyBMPArk41skPfc_ewjTu6I586mT8lV6Xy4'
    // });

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }

}
