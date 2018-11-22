import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EntryComponent } from "./components/entry/entry.component";
import { AdminComponent } from "./components/admin/admin.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import {AuthGuard} from './_guards/auth.guard';
import { DoctorComponent } from "./components/doctor/doctor.component";

const routes: Routes = [
  { path: "", component: EntryComponent },
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard]},
  {path: "doctor", component: DoctorComponent},
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
