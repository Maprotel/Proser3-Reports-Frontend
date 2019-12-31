
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

// Routing
import { AppRoutingModule } from './app-routing.module';

//  Components
import { AppComponent } from './app.component';



// Initial components
import { ByeComponent } from './pages/bye/bye.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
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
  providers: [
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
