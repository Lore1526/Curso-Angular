import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: any;
    enableInvalidCredential: boolean = false;
  
    constructor(private router: Router, private userService: UserService) {
    }
    username: any = '';
    password: any = '';

    ngOnInit() {
        this.enableInvalidCredential = false;
    }

    async login(): Promise<void> {

        let users = await this.userService.getUsers().toPromise();
        let user = users!.find(z => z.UserName == this.username && z.Password == this.password);

        console.log(user);
        if (typeof user !== 'undefined') {
            sessionStorage.setItem('UserName', user.UserName);
            sessionStorage.setItem('Password', user.Password);
            this.router.navigate(["/student"]);
        } else {
            this.enableInvalidCredential = true;
        }

    }

}


