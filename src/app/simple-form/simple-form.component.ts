import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
  <input 
  #myInput 
  type="text" 
  [(ngModel)]="message"
  [ngClass]="{mousedown:isMousedown}"
  (mousedown)="isMousedown = true"
  (mouseup)="isMousedown = false"
  (mouseleave)="isMousedown = false"
  >
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
  
  .mousedown{
    border: 2px solid green;
  }

  *{
    font-family: monospace;
  }
  `]
})
export class SimpleFormComponent implements OnInit {
  isMouseDown;
  constructor() { 
  }
  @Input() message;
  @Output() update = new EventEmitter;

  ngOnInit() {
  }

}
