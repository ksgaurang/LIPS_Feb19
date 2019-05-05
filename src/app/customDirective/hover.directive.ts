import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input() mouseHoverColor: string;
  @Input() mouseOutColor: string;
  @Input('appHover') defaultColor: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(element);
    // this.renderer.setStyle(element.nati, 'background-color', 'green');
  }

  @HostListener('mouseover') onmouseover() {
    console.log(this.defaultColor);
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.mouseHoverColor);
  }

  @HostListener('mouseout') onmouseout() {
    console.log(this.defaultColor);
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.mouseOutColor);
  }

}
