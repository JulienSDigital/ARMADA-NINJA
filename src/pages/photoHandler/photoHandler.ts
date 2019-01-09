import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "photoHandler.html"
})
export class PhotoHandler {
    event = {};
    description = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.event = navParams.get("data");
  }

  handleValidation() {
    // TODO: send to server side
    console.log(this.description);
    this.navCtrl.pop();
  }
}
