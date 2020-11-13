import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuClickEvent = new EventEmitter <any> ();
  @Output() navigateHomeEvent = new EventEmitter <any> ();
  @Input() isArticlePage: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  public toggleSideMenu(): void {
    this.menuClickEvent.emit();
  }
  public navigateHome(): void {
    this.navigateHomeEvent.emit();
  }
}
