import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
  <input #myInput type="text" [(ngModel)]="message">
  <button (click)="update.emit({text: message})">Click me!</button>
  `,
  styles: [`
  :host{
    display: flex;
    flex-direction: column;
  }
  input:focus{
    font-weight: bold;
    outline: none;
  }

  *{
    font-family: monospace;
  }
  `]
})
export class SimpleFormComponent implements OnInit {

  constructor() { 
  }
  @Input() message;
  @Output() update = new EventEmitter;

  ngOnInit() {
  }

}
