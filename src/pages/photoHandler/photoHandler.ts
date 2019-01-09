import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Geolocation } from "@ionic-native/geolocation";

@Component({
  selector: "page-home",
  templateUrl: "photoHandler.html"
})
export class PhotoHandler {
  event: any = {
    longitude: -1,
    latitude: -1,
    altitude: -1,
    time: -1,
    description: ""
  };

  constructor(
    public geolocation: Geolocation,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.event = navParams.get("data");
  }

  handleValidation() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.event.latitude = resp.coords.latitude;
        this.event.longitude = resp.coords.longitude;
        this.event.altitude = resp.coords.altitude;
        this.event.time = new Date();
        // TODO : send to server
        this.navCtrl.pop();
      })
      .catch((error) => {
        console.log("Error getting location", error);
      });
  }
}
