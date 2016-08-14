import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'pages/about/about.html'
})
export class AboutPage {
  items: Array<Object>;

  constructor(private navCtrl: NavController) {
    this.items = [];

    let items = [
      {title: 'Bartek'},
      {title: 'Kamil'},
      {title: 'Anna'},
      {title: 'Zofia'},
      {title: 'Ela'},
      {title: 'Patryk'}
    ];



    let copyItems = (id) => {
      return items.map((v:any) => {
        return {
          title: `${id}: ${v.title}`
        };
      });
    };

    this.items.push(
      ...copyItems(1),
      ...copyItems(2),
      ...copyItems(3),
      ...copyItems(4),
      ...copyItems(5)
      );
  }
}
