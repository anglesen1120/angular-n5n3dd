import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  receivedChildMessage: string;
  getvalueInput(value) {
    this.receivedChildMessage = value;

  }
}
