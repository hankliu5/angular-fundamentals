import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  // message = "You've got mail.";
  messages = [
    `You're now friends with Hank`,
    `Hank likes your like`,
    `Hello`
  ];
  constructor() { }
}
