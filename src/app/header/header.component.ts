import { Component, OnInit } from '@angular/core';

// Vendor
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public isMenuCollapsed = true;

  constructor() { }

  ngOnInit() {

  }

}
