import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-menu-main',
  templateUrl: './header-menu-main.component.html',
  styleUrls: ['./header-menu-main.component.s.scss']
})
export class HeaderMenuMainComponent implements OnInit {

  @Input() title: string;


  constructor() { }

  ngOnInit() {
  }

}
