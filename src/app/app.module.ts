
// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// Vendors
import { ToastrModule } from 'ngx-toastr';
import { TranslocoRootModule } from './transloco-root.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Locals
import { HeaderModule } from './header/header.module';

// Shared
import { AlertModule } from 'src/shared/modules';
import { IntroPageModule } from 'src/shared/modules';

// Services
import { EmployeeService } from 'src/shared/services';

// Routing
import { AppRoutingModule } from './app-routing.module';

//  Components
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { AlertComponent } from './bootstrap/alert/alert.component';
import { DatepickerComponent } from './bootstrap/datepicker/datepicker.component';
import { CarouselComponent } from './bootstrap/carousel/carousel.component';
import { TableComponent } from './bootstrap/table/table.component';
// Initial components
import { ByeComponent } from './pages/bye/bye.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    BootstrapComponent,
    AlertComponent,
    DatepickerComponent,
    CarouselComponent,
    TableComponent,
    ByeComponent,
    HomeComponent,
    LoginComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslocoRootModule,
    IntroPageModule,
    HeaderModule,
    AlertModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [EmployeeService,
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        window.location.href = (route.data as any).externalUrl;
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
