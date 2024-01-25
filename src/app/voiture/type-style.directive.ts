import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appTypeStyle]",
})
export class TypeStyleDirective {
  constructor(private opt: ElementRef) {
    this.opt.nativeElement.style.borderRadius = "8px";
  }
  @HostListener("mouseenter") onMouseEnter() {
    this.opt.nativeElement.style.opacity="0.6"
    //this.balise.nativeElement.style.backgroundColor = this.BackgroundDDD || "red";
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.opt.nativeElement.style.opacity="1"
  }
}
