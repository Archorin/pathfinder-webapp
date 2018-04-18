import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class MenuOptionComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit() {
  }

  show() {
    this.element.nativeElement.style.opacity = 1;
  }

  hide () {
    this.element.nativeElement.style.opacity = 0;
  }
}
