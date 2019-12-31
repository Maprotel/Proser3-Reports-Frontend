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
import { EmployeesRoutingModule } from './employees-routing.module';

// Services
import { EmployeeService } from 'src/shared/services';

// Components
import { EmployeesComponent } from './employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


@NgModule({
  declarations: [EmployeesComponent, EmployeeListComponent, EmployeeDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    AlertModule,
    ToastrModule,
    NgbModule,
    TranslocoRootModule,
    FontAwesomeModule,
    EmployeesRoutingModule
  ],
  providers: [EmployeeService, { provide: TRANSLOCO_SCOPE, useValue: 'employee' }]
})
export class EmployeesModule { }
