import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    [x: string]: any;
    currentUser: User;
    products: any = [];
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
    ngOnInit(){
       
      }
    
}