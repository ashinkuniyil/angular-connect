import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiHandlerService } from '../shared/services/api-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<RegistrationComponent>,
    private formBuilder: FormBuilder,
    public apiService: ApiHandlerService,
    private _snackBar: MatSnackBar
  ) {
    this.registrationForm = this.formBuilder.group({
      email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
      password: ['cityslicka', Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  submit() {
    this._snackBar.open('Loading');
    this.apiService
      .post('login', this.registrationForm.value)
      .subscribe(() => {
        this.onNoClick();
        this._snackBar.dismiss()
        this._snackBar.open('Registration Success', '', { duration: 2000 });
      });
  }

  ngOnInit(): void {}
}
