import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appHoverDetail]",
})
export class HoverDetailDirective {
  constructor(private ele: ElementRef) {
    this.ele.nativeElement.style.boxShadow='rgba(0, 0, 0, 0.4) 0px 30px 90px';

  }
  @HostListener("mouseenter") onMouseEnter() {
    this.ele.nativeElement.style.boxShadow='rgba(0, 0, 0, 0.56) 0px 22px 70px 4px';
    //this.balise.nativeElement.style.backgroundColor = this.BackgroundDDD || "red";
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.ele.nativeElement.style.boxShadow='rgba(0, 0, 0, 0.4) 0px 30px 90px';
  }
}
