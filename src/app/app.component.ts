import { Component, Inject } from '@angular/core';
import { MailService } from './mail.service';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `<div>
  <ul>
  <li *ngFor="let message of mail.messages">{{message}}</li>
  </ul>
  </div>`
})
export class AppComponent {
  title = 'Fundamentals';

  constructor(
    @Inject('mail') private mail,
  ) {}
}
