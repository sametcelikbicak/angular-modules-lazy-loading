import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "lazy1",
    loadChildren: () =>
      import("./lazy-module-1/lazy1.module").then(m => m.Lazy1Module)
  },
  {
    path: "lazy2",
    loadChildren: () =>
      import("./lazy-module-2/lazy2.module").then(m => m.Lazy2Module)
  },
  { component: HomeComponent, path: "", pathMatch: "full" },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
