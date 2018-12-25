import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navbarOpen = false;

  constructor() {}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
