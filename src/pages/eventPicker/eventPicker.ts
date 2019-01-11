import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { PhotoHandler } from "../photoHandler/photoHandler";

import { Geolocation } from "@ionic-native/geolocation";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { Storage } from "@ionic/storage";

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
  recordingButtonColor: string = "danger";
  FREQUENCY = 1000;

  constructor(
    public navCtrl: NavController,
    public geolocation: Geolocation,
    public camera: Camera,
    public storage: Storage
  ) {}

  beginRecord() {
    this.storage.get("recording").then((rec) => {
      console.log(rec);
      if (!rec) {
        const recordTimer = setInterval(() => {
          this.geolocation
            .getCurrentPosition()
            .then((resp) => {
              const coordonnee = {
                latitude: resp.coords.latitude,
                longitude: resp.coords.longitude,
                altitude: resp.coords.altitude,
                time: new Date()
              };
              this.storage.get("currentRide").then((currentRide) => {
                this.storage.set("currentRide", currentRide.push(coordonnee));
              });
            })
            .catch((error) => {
              console.log("Error getting location", error);
            });
        }, this.FREQUENCY);
        this.storage.set("recording", true);
        this.recordingButtonColor = "red";
        this.storage.set("recordTimer", recordTimer);
      } else {
        this.storage.get("currentRide").then((currentRide) => {
          //   this.storage.set("currentRide", currentRide.push(coordonnee));
          console.log(currentRide);
        });
        this.storage.set("recording", false);
        this.recordingButtonColor = "green";
        this.storage.get("recordTimer").then((recordTimer) => {
          clearInterval(recordTimer);
        });
      }
    });
  }

  makeInterestPoint() {
    this.camera.getPicture(this.options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        // let base64Image = "data:image/jpeg;base64," + imageData;
        this.event.type = "interestPoint";
        this.event.img = imageData;
        this.navCtrl.push(PhotoHandler, { data: this.event });
        // this.geolocation
        //   .getCurrentPosition()
        //   .then((resp) => {
        //     // resp.coords.latitude
        //     // resp.coords.longitude
        this.navCtrl.push(PhotoHandler);

        //     // TODO : add description
        //     // TODO: send to server side
        //   })
        //   .catch((error) => {
        //     console.log("Error getting location", error);
        //   });
      },
      (err) => {
        console.log("error happened from camera");
      }
    );
  }
}
