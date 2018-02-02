import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from './utilisateur';
import { Observable,  } from 'rxjs/Observable';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {

    }

    login(login: string, password: string ) {
        return this.http.post<Utilisateur>('http://localhost:5555/api/token', {login, password})
            .subscribe(response => this.setSession(response));
            // .shareReplay();
    }

    private setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn, 'second');

        localStorage.setItem('token', authResult.token);
        console.log(localStorage.getItem('token'));
        // localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
    }

    logout() {
        localStorage.removeItem('token');
        // localStorage.removeItem('expires_at');
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        // const expiration = localStorage.getItem('expires_at');
        // const expiresAt = JSON.parse(expiration);
        // return moment(expiresAt);
    }
}
