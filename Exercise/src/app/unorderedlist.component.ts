import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'unorderedlist',
  template: `
  <ul>
    <li *ngFor="let item of items">{{item}}</li>
  </ul>
  `,
  styles: []
})
export class UnorderedlistComponent implements OnInit {

  @Input() items: string[] = ['i1', 'i2', 'i3', 'i4', 'i5', 'i6'];

  constructor() { }

  ngOnInit() {

  }

}
