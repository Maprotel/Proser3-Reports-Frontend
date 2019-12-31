// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Vendor
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AlertComponent } from "./alert.component";

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, NgbModule],
  exports: [AlertComponent]
})
export class AlertModule { }
