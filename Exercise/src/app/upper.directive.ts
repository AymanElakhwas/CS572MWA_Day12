import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[upper]'
})
export class UpperDirective {

  constructor(private e: ElementRef,
    private r: Renderer2) {
  }

  ngOnInit() {
    this.r.setProperty(this.e.nativeElement, 'innerHTML', this.e.nativeElement.innerHTML.toUpperCase());
  }

}
