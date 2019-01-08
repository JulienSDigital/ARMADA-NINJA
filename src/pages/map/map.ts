// import { Component } from '@angular/core';
// import { NavController, Platform } from 'ionic-angular';
// import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
//

import { Component,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// @ts-ignore
import { LocalStorageService } from 'angular-2-local-storage';
import { PlacesProvider} from '../../providers/places/places';
import { LoadingController } from "ionic-angular";
import {PlaceMapPage} from '../../pages/place-map/place-map';


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage implements OnInit {
  selectedItem: any;
  records;
  places;
  constructor(public navCtrl: NavController, public navParams: NavParams, private localStorage: LocalStorageService
    ,public pp : PlacesProvider,
              private loadingCtrl: LoadingController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.records= this.localStorage.get('records');



    console.log(this.records);
    this.places = [];



  }
  ngOnInit() {
    this.fetchPlaces();
  }

  async fetchPlaces(){
    let loading = this.loadingCtrl.create({
      spinner: "crescent",
      content: "Please wait...  !"
    });
    loading.present();
    if (this.records !== null)
    {
      this.records.forEach(async(element) => {
        console.log(element);
        this.places.push(await this.getPlaces(element.lat, element.long));
      });
    }
    loading.dismiss();


  }


  getPlaces(lat,long){
    return new Promise(resolve => {
      this.pp.getPlaces(lat,long).subscribe(response => {
        resolve(response);
        console.log(response);
      },error =>{
        console.log(error);
      })
    })
  }
  itemTapped(event, place) {
    this.navCtrl.push(PlaceMapPage, {
      place: place
    });
  }

}
