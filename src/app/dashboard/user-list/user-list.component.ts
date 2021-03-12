import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ApiHandlerService } from '../../shared/services/api-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataStore } from '../../utilities/data-store';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  faUser = faUser;
  userData: any = [];
  searchForm: FormGroup;
  dataStore: DataStore;
  constructor(
    private formBuilder: FormBuilder,
    public apiService: ApiHandlerService,
    private _snackBar: MatSnackBar
  ) {
    this.dataStore = DataStore.getInstance();
    this.searchForm = this.formBuilder.group({
      search: [''],
    });
  }

  ngOnInit(): void {
    this._snackBar.open('Loading user details...');
    this.apiService.get('users?page=2').subscribe((data: any) => {
      this.userData = data?.data;
      this._snackBar.dismiss();
    });
  }
  selectUser(user: any) {
    this.dataStore.setData('selectedUser', user);
  }
}
