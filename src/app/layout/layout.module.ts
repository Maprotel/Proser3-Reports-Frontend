// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Vendor
import { ToastrModule } from 'ngx-toastr';

// Locals
import { HeaderModule } from '../header/header.module';
import { LayoutRoutingModule } from './layout-routing.module';


// Components
import { LayoutComponent } from './layout.component';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    HeaderModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
