import { Component, Inject } from '@angular/core';
import { MailService } from './mail.service';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `<div>
  <ul>
  <li *ngFor="let message of mail.messages">{{message.text}}</li>
  </ul>
  <app-simple-form 
    *ngFor="let message of mail.messages" [message]="message.text" (update)="onUpdate(message.id, $event.text)">
  </app-simple-form>
  </div>`
})
export class AppComponent {
  title = 'Fundamentals';
  onUpdate(id, text) {
    this.mail.update(id, text);
  }
  constructor(
    @Inject('mail') private mail,
  ) {}
}
