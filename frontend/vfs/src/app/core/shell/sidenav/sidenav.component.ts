import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  /** Input */
  /** Title */
  @Input() title: string = environment.app.name;

  constructor() { }

  ngOnInit() {
  }

}
