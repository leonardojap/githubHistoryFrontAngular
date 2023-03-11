import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListMethodsComponent } from "./list-methods/list-methods.component";

const routes: Routes = [
  {
    path: "",
    component: ListMethodsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackMethodsRoutingModule {}
