import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/home', title: 'Home',  icon: 'arrows-1_minimal-right', class: '' },
    { path: '/my-legend-team', title: 'My Legend Team',  icon:'objects_globe', class: '' },
    { path: '/my-team', title: 'My Team',  icon:'tech_controller-modern', class: '' },
    { path: '/ranking', title: 'Ranking',  icon:'sport_trophy', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'users_single-02', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any = [];

  constructor() { 
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
