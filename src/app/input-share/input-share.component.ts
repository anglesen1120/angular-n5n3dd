import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'input-share',
  templateUrl: './input-share.component.html',
  styleUrls: ['./input-share.component.css']
})
export class InputShareComponent implements OnInit {
@Input () value : string ='';
@Output () sendValue = new  EventEmitter();
  constructor() { }

  ngOnInit() {
   
  }

  submitValue (value: string){
    this.sendValue.emit(value);

  }

}