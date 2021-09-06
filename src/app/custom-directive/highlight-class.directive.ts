import { hostViewClassName } from '@angular/compiler';
import { Directive ,ElementRef,Input} from '@angular/core';

@Directive({
  selector: '[appHighlightClass]',
  host:{
    '(mouseenter)':'onMouseEnter()',
    '(mouseleave)':'onMouseLeave()'
  }
})
export class HighlightClassDirective {
  element: HTMLElement;

 @Input()
 appHighlightClass:string;
 constructor(public eleRef :ElementRef){
   this.element=eleRef.nativeElement;
 }


  onMouseEnter(){
this.element.style.backgroundColor="Yellow";
this.element.style.fontWeight="bold";
  }

  onMouseLeave(){
    this.element.style.backgroundColor="white";
    this.element.style.fontWeight="Normal"

  }
}
