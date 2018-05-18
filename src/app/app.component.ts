import { Component, Inject } from '@angular/core';
import { MailService } from './mail.service';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `<div><app-simple-form>
  </app-simple-form>
    {{mail.message}}
    <hr>
    {{api}}
  </div>`
})
export class AppComponent {
  title = 'Fundamentals';

  constructor(
    @Inject('mail') private mail,
    @Inject('api') private api,
  ) {}
}
