import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavHeaderComponent implements OnInit {
  @ViewChild('scrollMenu', { read: ElementRef }) public scrollMenu: ElementRef<any>;

  constructor() { }

  ngOnInit(): void {
  }
  public scrollLeft(): void {
    this.scrollMenu.nativeElement.scrollLeft += 150;
  }

  public ScrollRight(): void {
    this.scrollMenu.nativeElement.scrollLeft -= 150;
  }
}
