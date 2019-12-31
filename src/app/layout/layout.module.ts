// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Vendor
import { ToastrModule } from 'ngx-toastr';
import { TranslocoRootModule } from './transloco-root.module';

// Components
import { LayoutComponent } from './layout.component';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
