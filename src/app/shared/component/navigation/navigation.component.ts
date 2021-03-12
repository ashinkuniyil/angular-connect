import { Component, OnInit } from '@angular/core';
import {
  faUserCircle,
  faComments,
  faPhone,
  faUser,
  faBell,
  faCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { DataStore } from '../../../utilities/data-store';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  faCog = faCog;
  faSignOutAlt = faSignOutAlt;
  dataStore: DataStore;
  icons = [
    { name: faUserCircle, color: 'white', default: true },
    { name: faComments, color: 'white', active: true },
    { name: faPhone, color: 'white' },
    { name: faUser, color: 'white' },
    { name: faBell, color: 'white' },
  ];
  constructor(private router: Router) {
    this.dataStore = DataStore.getInstance();
  }

  ngOnInit(): void {}
  logout() {
    this.dataStore.clearAll();
    this.router.navigate(['/', 'login']);
  }
}
