import { Component, OnInit } from '@angular/core';
import { INavItem } from '@softvisionartifacts/navbar/lib/models/navbar.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  navItems: INavItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.navItems = this.getNavItems();
  }

  getNavItems(): INavItem[] {
    return [
      { path: '/home', title: 'Home'},
      { path: '/events', title: 'Events'},
      { path: '/blog', title: 'Blog'},
      { path: '/contact', title: 'Contact'},
    ];
  }
}
