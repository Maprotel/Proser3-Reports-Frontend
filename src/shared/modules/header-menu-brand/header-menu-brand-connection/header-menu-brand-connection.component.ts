import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';

@Component({
  selector: 'app-header-menu-brand-connection',
  templateUrl: './header-menu-brand-connection.component.html',
  styleUrls: ['./header-menu-brand-connection.component.s.scss']
})
export class HeaderMenuBrandConnectionComponent implements OnInit {

  constructor(
    private connectionService: ConnectionService
  ) {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = 'ONLINE';
      } else {
        this.status = 'OFFLINE';
      }
    });
  }

  status = 'ONLINE';
  isConnected = true;


  ngOnInit() {
  }

}
