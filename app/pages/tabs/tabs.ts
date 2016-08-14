import {Component, ViewChild} from '@angular/core';
import { Slides } from 'ionic-angular';

import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {EmptyPage} from '../empty/empty';



@Component({
  templateUrl: 'pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;

  currState = '0';
  @ViewChild('MainSlider') slider: Slides;  

  onTabUpdate(event){
    let newIndexAfterUpdate = event.activeIndex;
    this.currState = String(newIndexAfterUpdate);
  }

  onSegmentUpdate(event){
    this.currState = event.value;

    console.log(this.currState);

    console.log(this.slider);

    this.slider.slideTo( parseInt( this.currState));

  }

  constructor() {   


    // this tells the tabs component which Pages
    // should be each tab's root Page
    /*this.tab1Root = AboutPage;
    this.tab2Root = HomePage;
    this.tab3Root = ContactPage;
    this.tab4Root = HomePage;*/


  }
}
