import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  twoWayobj:string;

   childObj:string;
  constructor() { }


  ngOnInit(): void {
   
  }


  GetChildData(data:any){
   this.childObj=data;
  }
}
