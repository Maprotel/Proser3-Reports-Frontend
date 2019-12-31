import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";


const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "layout",
        component: LayoutComponent
      },
      {
        path: "person",
        loadChildren: () =>
          import("./modules/person/person.module").then(
            m => m.PersonModule
          )
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
