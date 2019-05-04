import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(element);
    // this.renderer.setStyle(element.nati, 'background-color', 'green');
  }

  @HostListener('mouseover') onmouseover() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseout') onmouseout() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'white');
  }

}
