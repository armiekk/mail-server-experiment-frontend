import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Headers, URLSearchParams } from '@angular/http';
import axios from 'axios';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MailService {

  constructor(
    protected http: Http
  ) { }

  sendMail(mailPayload: any) {
    // const body = new URLSearchParams();
    // Object.keys(mailPayload).map((key: string) => body.set(key, mailPayload[key]));
    // const requestHeaders: Headers = new Headers();
    // requestHeaders.set('Content-Type', 'application/x-www-form-urlencoded');
    // const requestOptions: RequestOptionsArgs = {
    //   headers: requestHeaders,
    // }
    // console.log(body.toString());
    // return this.http.post(`/sendMail`, body.toString(), requestOptions)
    //   .map((response: Response) => response.json())
    //   .catch((err) => {
    //     console.log(err);
    //     return Observable.of();
    //   });
    const body = new FormData();
    Object.keys(mailPayload).map((key: string) => body.append(key, mailPayload[key]));
    return Observable.from(axios.post('/sendMail', body, {
      proxy: {
        host: 'http://localhost',
        port: 3000
      }
    }));
  }

}
