import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  apiUrl = 'http://192.168.10.82:3000/auth';

  signIn(data) {
    console.log(data);
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/sign_in',JSON.stringify(data)).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
