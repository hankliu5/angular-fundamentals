import { Component, Inject } from '@angular/core';
import { MailService } from './mail.service';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `<div>
  <ul>
  <app-simple-form *ngFor="let message of mail.messages" [message]="message"></app-simple-form>
  </ul>
  </div>`
})
export class AppComponent {
  title = 'Fundamentals';

  constructor(
    @Inject('mail') private mail,
  ) {}
}
