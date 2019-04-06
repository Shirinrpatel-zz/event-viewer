import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styles: [`
        em { color: red; float: right }
    `]
})
export class LoginComponent {

    constructor(private auth: AuthService, private router: Router) {

    }

    login(formValue) {
        this.auth.login(formValue.userName, formValue.password);

        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}