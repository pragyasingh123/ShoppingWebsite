import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Router,NavigationEnd,ActivatedRoute} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  showNav:boolean=false;
  constructor(private router : Router, private acitvatedRoute:ActivatedRoute, private titleService:Title){

  }

  ngOnInit(){
   this.router.events.pipe(
     filter(event=>event instanceof NavigationEnd),
   ).subscribe(() =>{
     const rt=this.getChild(this.acitvatedRoute);
     rt.data.subscribe(data =>{
       console.log(data);
       this.titleService.setTitle(data.title);
     })
   })
  }

  getChild(acitvatedRoute:ActivatedRoute){
    if(acitvatedRoute.firstChild){
      return this.getChild(acitvatedRoute.firstChild)

    }
    else{
      return acitvatedRoute;
    }
  }
}
