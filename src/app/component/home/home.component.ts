import { Component, OnInit } from '@angular/core';
import { MailService } from '../../service/mail/mail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mailModel: any;

  constructor(
    protected mailService: MailService
  ) { }

  ngOnInit() {
    this.mailModel = {
      fromMail: 'kampanart.k@cdg.co.th',
      toMail: 'kampanart.k@cdg.co.th',
      subject: 'Test Email Client Experimental',
      content: `
        Test Email Client Experimental
        Test Email Client Experimental
        Test Email Client Experimental
        Test Email Client Experimental
        Test Email Client Experimental
        Test Email Client Experimental
        Test Email Client Experimental
      `
    };
  }

  sendMail(mailPayload: any) {
    mailPayload = {
      ...mailPayload,
      toMail: mailPayload.toMail.split(','),
      // cc: mailPayload.cc.split(','),
      // bcc: mailPayload.bcc.split(',')
    }
    console.log(mailPayload);
    this.mailService.sendMail(mailPayload)
      .subscribe((res) => alert(res), (res) => alert(res));
  }

  clear() {
    this.mailModel = {};
  }

  onSelectFile(event) {
    console.log(event)
    this.mailModel = {
      ...this.mailModel,
      file: event.dataTransfer ? event.dataTransfer.files : event.target.files[0]
    };
  }

}
