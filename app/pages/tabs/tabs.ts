import {Component} from '@angular/core';
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

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = AboutPage;
    this.tab2Root = HomePage;
    this.tab3Root = ContactPage;
    this.tab4Root = HomePage;
  }
}
