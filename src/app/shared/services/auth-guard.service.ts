import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { DataStore } from '../../utilities/data-store';
@Injectable()
export class AuthGuardService implements CanActivate {
  dataStore: DataStore;
  constructor(public router: Router) {
    this.dataStore = DataStore.getInstance();
  }
  canActivate(): boolean {
    if (!this.dataStore.getData('token')) {
      this.router.navigate(['login']);
      return false;
    }
    this.dataStore.clearContextData('token');
    return true;
  }
}
