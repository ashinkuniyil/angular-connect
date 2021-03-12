import { Component, OnInit } from '@angular/core';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStore } from '../utilities/data-store';
import { RegistrationComponent } from '../registration/registration.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiHandlerService } from '../shared/services/api-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faImdb = faImdb;
  loginForm: FormGroup;
  dataStore: DataStore;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    public apiService: ApiHandlerService,
    private _snackBar: MatSnackBar
  ) {
    this.dataStore = DataStore.getInstance();
    this.loginForm = this.formBuilder.group({
      email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
      password: ['cityslicka', Validators.required],
    });
  }

  ngOnInit(): void {}
  openRegistraionDialog() {
    const dialogRef = this.dialog.open(RegistrationComponent, {
      width: '30%',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
  actLogin() {
    this._snackBar.open('Loading...');
    this.apiService.post('login', this.loginForm.value).subscribe((data) => {
      this._snackBar.dismiss();
      this.dataStore.setData('token', data);
      this.router.navigate(['/', 'dashboard']);
    });
  }
}
