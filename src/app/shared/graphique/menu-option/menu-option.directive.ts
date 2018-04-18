import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[menuOption]'
})
export class MenuOptionDirective {
  constructor(private element: ElementRef) { }

  @HostBinding('class.menu-option-show') show: boolean = false;
  @HostBinding('class.menu-option-hide') hide: boolean = true;

  @HostListener('mouseenter') onMouseEnter() {
    this.show = true;
    this.hide = false;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.show = false;
    this.hide = true;
  }
}
