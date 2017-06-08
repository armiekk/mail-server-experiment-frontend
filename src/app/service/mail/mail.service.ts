import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Headers, URLSearchParams } from '@angular/http';
import axios from 'axios';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MailService {

  basePath: string = '/api/mail';

  constructor(
    protected http: Http
  ) { }

  sendMail(mailPayload: any) {
    const body = new FormData();
    Object.keys(mailPayload).map((key: string) => body.append(key, mailPayload[key]));
    return Observable.from(axios.post(`${this.basePath}/sendMail`, body, {
      proxy: {
        host: 'http://localhost',
        port: 3000
      }
    }));
  }

}
