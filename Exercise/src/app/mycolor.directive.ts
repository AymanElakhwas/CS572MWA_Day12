import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective {

  colors: string[] = ['RED', 'BLUE', 'BLACK', 'YELLOW'];
  index: number = 0;
  constructor(private _e: ElementRef, private _r: Renderer2) { }

  @HostListener('click')
  elementClicked() {
    this._r.setStyle(this._e.nativeElement, 'color', this.nextColor());
  }

  nextColor(): string {
    console.log('invoked');
    this.index %= this.colors.length;
    let color: string = this.colors[this.index];
    this.index++;
    return color;
  }

}
