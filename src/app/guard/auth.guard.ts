import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";
import { Injectable } from '@angular/core';
import { UserService } from "../login/login.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    isAutenticated: Boolean = false;

    constructor(private router: Router, private userService: UserService) {
        this.userService = userService;
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        return this.checkLogin();

    }
    async checkLogin(): Promise<any> {
        let username = sessionStorage.getItem('UserName');
        let password = sessionStorage.getItem('Password');

        let users = await this.userService.getUsers().toPromise();
        let user = users!.find(z => z.UserName == username && z.Password == password);
      console.log(users);
      console.log(user);
        if (typeof user !== 'undefined') {
            return true;
        }

        sessionStorage.setItem('UserName', '');
        sessionStorage.setItem('Password', '');
        this.router.navigate(['/login']);
        return false;
    }
}