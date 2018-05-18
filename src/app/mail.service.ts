import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  // message = "You've got mail.";
  messages = [
    {id: 0, text: `You're now friends with Hank`},
    {id: 1, text: `Hank likes your like`},
    {id: 2, text: `Hello`}
  ];

  update(id, text) {
    this.messages = this.messages.map(m => m.id === id ? {id, text} : m);
  }
  constructor() { }
}
