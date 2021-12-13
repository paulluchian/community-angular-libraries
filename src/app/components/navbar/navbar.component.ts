import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { INavItem } from './models/navbar.model';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() logo = '';

  @Input() items: INavItem[] = [];

  currentPath = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe({
        next: (event) => {
          this.currentPath = (event as any).url.split('?')[0];
        }
      });
   }

  navigateTo(url: string | undefined): void {
    if (!url) { return; }
    this.router.navigateByUrl(url);
  }

}
