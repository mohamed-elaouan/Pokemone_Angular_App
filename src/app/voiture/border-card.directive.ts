import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[MyBorderCard]",
})
export class BorderCardDirective {
  @Input("MyBorderCard") BorderColor: string; //Comme Variable normale
  @Input() BackgroundDDD='';
  constructor(private balise: ElementRef) {
    this.setBorder("white");
    this.balise.nativeElement.style.borderRadius = "8px";
  }
  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.BorderColor || "red");
    //this.balise.nativeElement.style.backgroundColor = this.BackgroundDDD || "red";
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder("white");
  }
  setBorder(color: string) {
    let bor = `solid 3px ${color}`;
    this.balise.nativeElement.style.border = bor;
  }
}
