import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/catch';

@Injectable()
export class RegisterPageService {
  constructor(private http: Http) {}

  register(login: string, password: string, email: string) {
    let body = JSON.stringify({
      login: login,
      password: password,
      email: email
    });

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions(headers);

    alert(login + " " + password + " " + email);

    //return this.http.post('/account/login', body, options);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }
}
