// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Vendor
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Locals
import { HeaderMenuBrandModule } from 'src/shared/modules/header-menu-brand/header-menu-brand.module';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { HeaderMenuUserComponent } from './header-menu-user/header-menu-user.component';
import { HeaderMenuMainComponent } from './header-menu-main/header-menu-main.component';
import { HeaderMenuOrganizationComponent } from './header-menu-organization/header-menu-organization.component';
import { HeaderMenuPersonComponent } from './header-menu-person/header-menu-person.component';
import { HeaderMenuOperationComponent } from './header-menu-operation/header-menu-operation.component';
import { HeaderMenuAuxiliarComponent } from './header-menu-auxiliar/header-menu-auxiliar.component';


@NgModule({
  declarations: [HeaderComponent, HeaderMenuUserComponent, HeaderMenuMainComponent, HeaderMenuOrganizationComponent, HeaderMenuPersonComponent, HeaderMenuOperationComponent, HeaderMenuAuxiliarComponent],
  imports: [
    CommonModule,
    HeaderMenuBrandModule,
    NgbModule,
    HeaderRoutingModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
