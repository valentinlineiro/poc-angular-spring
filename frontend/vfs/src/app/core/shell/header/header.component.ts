import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /** Environment application name */
  protected title: string = environment.app.name;

  /** Output property to control the sidebar */
  @Output() toggleSidebar = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

}
