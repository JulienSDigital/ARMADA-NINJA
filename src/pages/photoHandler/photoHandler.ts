import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "photoHandler.html"
})
export class PhotoHandler {
  constructor(public navCtrl: NavController) {}

  handleClick() {
    this.navCtrl.pop();
  }
}
