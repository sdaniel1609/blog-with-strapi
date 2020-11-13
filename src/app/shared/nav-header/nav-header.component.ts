import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavHeaderComponent implements OnInit {
  @ViewChild('scrollMenu', { read: ElementRef }) public scrollMenu: ElementRef<any>;
  @Input() categories: any[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.categories)
  }
  public scrollLeft(): void {
    this.scrollMenu.nativeElement.scrollLeft += 150;
  }

  public ScrollRight(): void {
    this.scrollMenu.nativeElement.scrollLeft -= 150;
  }
}
