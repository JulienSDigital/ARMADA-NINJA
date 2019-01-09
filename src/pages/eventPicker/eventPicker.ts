import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { PhotoHandler } from "../photoHandler/photoHandler";

import { Camera, CameraOptions } from "@ionic-native/camera";
import { Geolocation } from "@ionic-native/geolocation";

@Component({
  selector: "page-home",
  templateUrl: "eventPicker.html"
})
export class EventPicker {
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };
  event: any = {
    type: "event",
    img: "",
    longitude: -1,
    latitude: -1,
    altitude: -1,
    time: -1,
    description: ""
  };

  constructor(
    public navCtrl: NavController,
    private geolocation: Geolocation,
    private camera: Camera
  ) {}

  /**
   * take photo
   * retrieve position
   * add description
   * enable validation
   * push to db
   */
  makeInterestPoint() {
    this.camera.getPicture(this.options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        // let base64Image = "data:image/jpeg;base64," + imageData;
        this.event.type = "interestPoint";
        this.event.img = imageData;
        this.navCtrl.push(PhotoHandler, { data: this.event });
      },
      (err) => {
        console.log("error happened from camera");
      }
    );
  }
}
