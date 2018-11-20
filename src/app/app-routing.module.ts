import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EntryComponent } from "./components/entry/entry.component";
import { AdminComponent } from "./components/admin/admin.component";

const routes: Routes = [
  { path: "", component: EntryComponent },
  { path: "admin", component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
