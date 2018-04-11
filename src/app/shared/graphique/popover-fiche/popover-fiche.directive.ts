import { Directive, ElementRef, Renderer2, ViewContainerRef, Input, HostListener } from '@angular/core';
import { PopoverDirective, PopoverConfig } from 'ngx-bootstrap/popover';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[popoverFiche]'
})
export class PopoverFicheDirective extends PopoverDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('popoverFiche') popover;
  elementRef: ElementRef;
  renderer: Renderer2;
  viewContainerRef: ViewContainerRef;
  config: PopoverConfig;
  cis: ComponentLoaderFactory;
  outsideClick: boolean = true;
  container: string = 'body';
  placement: 'top' | 'left' | 'right' | 'bottom' | 'auto' = 'auto';

  constructor(
    elementRef: ElementRef,
    renderer: Renderer2,
    viewContainerRef: ViewContainerRef,
    config: PopoverConfig,
    cis: ComponentLoaderFactory
  ) {
    super(elementRef, renderer, viewContainerRef, config, cis);
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.viewContainerRef = viewContainerRef;
    this.config = config;
    this.cis = cis;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.cursor = 'help';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.cursor = null;
  }

  @HostListener('mousedown') onMouseDown() {
    super.toggle();
  }

  @HostListener('mouseup') onMouseUp() {
    super.toggle();
  }
}
