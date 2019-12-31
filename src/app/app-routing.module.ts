
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';

import { ByeComponent } from './pages/bye/bye.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';


import { EmployeesComponent } from './employees/employees.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { CarouselComponent } from './bootstrap/carousel/carousel.component';



const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: HomeComponent
      },

      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "bye",
        component: ByeComponent
      },
      {
        path: "layout",
        loadChildren: () =>
          import("./layout/layout.module").then(m => m.LayoutModule)
      }
    ]
  },

  {
    path: 'employee',
    component: EmployeesComponent,
  },
  {
    path: 'bootstrap',
    component: BootstrapComponent
  },
  {
    path: 'carousel',
    component: CarouselComponent
  },

  { path: "not-found", component: NotfoundComponent },
  // NAVIGATE TO NOT FOUND PAGE
  { path: "**", redirectTo: "not-found" },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }