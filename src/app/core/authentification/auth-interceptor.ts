import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
    HttpInterceptor,
    HttpEvent,
    HttpRequest,
    HttpHandler,
    HttpResponse,
    HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken = localStorage.getItem('token');

        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set('Authorization',
                    'Bearer ' + idToken)
            });
            req = cloned;
            // return next.handle(cloned);
        } /*else {
            return next.handle(req);
        }*/
        return next.handle(req).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              // do stuff with response if you want
            }
          }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
                // redirect to the login route
                // or show a modal
                console.log(this.router.url);
                this.router.navigate(['personnage/login']);
              }
            }
          });
    }
}
