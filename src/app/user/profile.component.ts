import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { TOASTER_TOKEN, Toaster } from '../common/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999 }
    .error :-moz-placeholder { color: #999 }
    .error :ms-input-placeholder { color: #999 }
  `]
})
export class ProfileComponent implements OnInit {
  profileGroup: FormGroup;

  constructor(private authService: AuthService, private router: Router, @Inject(TOASTER_TOKEN)private toastr: Toaster) {

  }

  ngOnInit() {
    const firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    const lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    this.profileGroup = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }

  submit(formGroupControl) {
    if (this.profileGroup.valid) {
      this.authService.updateUserDetails(formGroupControl.controls.firstName.value, formGroupControl.controls.lastName.value);
      this.toastr.success('done');
      this.router.navigate(['events']);
    }    
  }

  validateFirstName() {
    return this.profileGroup.controls.firstName.valid || this.profileGroup.controls.firstName.untouched;
  }

  validateLastName() {
    return this.profileGroup.controls.lastName.valid || this.profileGroup.controls.lastName.untouched;
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
