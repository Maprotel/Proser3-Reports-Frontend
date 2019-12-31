import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderMenuBrandComponent } from "./header-menu-brand.component";
import { HeaderMenuBrandConnectionComponent } from './header-menu-brand-connection/header-menu-brand-connection.component';
import { HeaderMenuBrandDateComponent } from './header-menu-brand-date/header-menu-brand-date.component';
import { HeaderMenuBrandTimeComponent } from './header-menu-brand-time/header-menu-brand-time.component';


@NgModule({
  declarations: [HeaderMenuBrandComponent, HeaderMenuBrandConnectionComponent, HeaderMenuBrandDateComponent, HeaderMenuBrandTimeComponent],
  imports: [CommonModule],
  exports: [HeaderMenuBrandComponent, HeaderMenuBrandConnectionComponent, HeaderMenuBrandDateComponent, HeaderMenuBrandTimeComponent],

})
export class HeaderMenuBrandModule { }
