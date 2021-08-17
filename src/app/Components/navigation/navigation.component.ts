import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

   home:string;
   contact:string;
   career:string;
   Information:string;
   NavObject:any;
  showForms:boolean=false;

  constructor() { 
    this.home="HOME";
    this.contact="CONTACT";
    this.career="CAREER";
    this.Information="INFORMATION";
    this.NavObject=[{
      "itemName":"HOME",
      "url":"https://stackoverflow.com/questions/6434126/how-to-access-url-and-bookmark-title-in-url-files",
    },{
      "itemName":"CONTACT",
      "url":"https://google.com/"
    },
    {
      "itemName":"CAREERS",
      "url":"https://twitter.com/"
    }];

  }

  ngOnInit(): void {
  

  } 


  ShowFormComponent(event:any){
  if(this.showForms==true){
    this.showForms=false;
  }
  else{
    this.showForms=true;
  }
 
  }

  ShowFormComponent2(event:any){
    if(this.showForms==true){
      this.showForms=false;
    }
    else{
      this.showForms=true;
    }
   
    }
   
}
