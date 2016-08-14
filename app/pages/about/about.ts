import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'pages/about/about.html'
})
export class AboutPage {
  items: Array<Object>;

  constructor(private navCtrl: NavController) {
    this.items = [];

  }
}
