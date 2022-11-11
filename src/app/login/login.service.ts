import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userUrl = 'https://63643c0b7b209ece0f43457e.mockapi.io/api/v1/users';

    constructor(private http: HttpClient) { }

    //get all users
    getUsers(): Observable<any[]> {
        return this.http.get<any[]>(this.userUrl)
            .pipe(
                catchError(this.handleError)
            );
    }

    getUsersByPasswordAndUserName(userName: string, password: string): Observable<any | undefined> {
        return this.getUsers()
            .pipe(
                map((users: any[]) => users.find(p => p.userName === userName && p.password === password))
            );
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {

            errorMessage = `An error occurred: ${err.error.message}`;
        } else {

            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }

    logOut(): void{
        sessionStorage.setItem('UserName', '');
        sessionStorage.setItem('Password', '');
    }

}