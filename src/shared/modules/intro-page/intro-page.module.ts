// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// Vendor
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// Components
import { IntroPageComponent } from "./intro-page.component";

@NgModule({
  declarations: [IntroPageComponent],
  imports: [CommonModule, CommonModule, FormsModule, NgbModule],
  exports: [IntroPageComponent]
})
export class IntroPageModule { }
