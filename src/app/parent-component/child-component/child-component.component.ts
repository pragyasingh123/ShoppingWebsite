import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
   
  @Input() userName:string;
  @Input('account-id')  accountId:string;
  @Input()  bankname:string;
  
  @Output() myOutput:EventEmitter<string> = new EventEmitter();

  outPutMessage:string="I am child component";


  constructor() { }

  ngOnInit(): void {
  }

  SendDataValues(){
    this.myOutput.emit(this.outPutMessage);
  }

}
