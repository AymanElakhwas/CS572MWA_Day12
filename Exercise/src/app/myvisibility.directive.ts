import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective {
  @Input() myvisibility: string = 'true';
  constructor(private _e: ElementRef, private _r: Renderer2) { }

  ngOnInit() {
    console.log(this.myvisibility);
    this._r.setStyle(this._e.nativeElement, 'display', this.myvisibility == 'true' ? 'block' : 'none');
  }

}
