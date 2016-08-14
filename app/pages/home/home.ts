import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'pages/home/home.html'
})
export class HomePage {
  count = 2;

  incrementButton(){
    ++this.count;
  }

  constructor(private navCtrl: NavController) {
 
  }
}
