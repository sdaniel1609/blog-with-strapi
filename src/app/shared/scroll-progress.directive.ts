import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appScrollProgress]'
})
export class ScrollProgressDirective {
  @Input() active: boolean;

  constructor() {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event): void {
    if (this.active) {
      const winScroll = event.target.documentElement.scrollTop || event.currentTarget.scrollTop || document.body.scrollTop;
      const height = (event.target.documentElement.scrollHeight || event.currentTarget.scrollHeight ) -
        (event.target.documentElement.clientHeight || event.currentTarget.clientHeight);
      const scrolled = (winScroll / height) * 100;
      document.getElementById('scrollBar').style.width = scrolled + '%';
    }
  }

}
