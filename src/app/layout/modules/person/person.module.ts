// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

// Vendor
import { ToastrModule } from 'ngx-toastr';
import { TranslocoRootModule } from '../../../transloco-root.module';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Locals
import { HeaderModule } from '../../../header/header.module';

// Shared
import { AlertModule } from 'src/shared/modules';

// Routing
import { PersonRoutingModule } from './person-routing.module';

// Services
import { PersonService } from 'src/shared/services';

// Components
import { PersonComponent } from './person.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonListComponent } from './person-list/person-list.component';


@NgModule({
  declarations: [PersonComponent, PersonDetailComponent, PersonListComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    AlertModule,
    ToastrModule,
    NgbModule,
    TranslocoRootModule,
    FontAwesomeModule,
    PersonRoutingModule
  ],
  providers: [PersonService, { provide: TRANSLOCO_SCOPE, useValue: 'person' }]
})
export class PersonModule { }
