import { Routes } from "@angular/router";

import { AdminComponent } from "./components/admin/pages/admin.component";
import { DoctorComponent } from "./components/doctor/pages/doctor.component";
import { DashboardComponent } from "./pages/dashboard.component";

export const DASHBOARD_ROUTES: Routes = [
  { path: "", component: DashboardComponent },
  { path: "Admin", component: AdminComponent },
  { path: "Doctor", component: DoctorComponent },
  { path: "**", redirectTo: "" }
];
