import { Component } from '@angular/core';
import {Router} from '@angular/router';

export interface NavigationItem {
  value: string;
  link: string;
}

@Component({
  selector: 'page-side-nav',
  templateUrl: './page-side-nav.component.html',
  styleUrls: ['./page-side-nav.component.scss']
})
export class PageSideNavComponent {
  panelName: string = '';
  navItems: NavigationItem[] = [];

  constructor() {
    this.navItems = [
      { value: 'View Books', link: 'view-books' },
      { value: 'My Orders', link: 'my-orders' },
    ];
  }

}
