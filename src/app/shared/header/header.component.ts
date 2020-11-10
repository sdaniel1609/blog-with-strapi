import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuClickEvent = new EventEmitter <any> ();
  constructor() { }

  ngOnInit(): void {
  }

  public toggleSideMenu(): void {
    this.menuClickEvent.emit();
  }
}
