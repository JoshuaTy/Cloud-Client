import { Routes } from "@angular/router";

import { AdminComponent } from "./components/admin/pages/admin.component";
import { DoctorComponent } from "./components/doctor/doctor.component";
import { DashboardComponent } from "./pages/dashboard.component";
import { ADMIN_ROUTES } from "./components/admin/routing";

export const DASHBOARD_ROUTES: Routes = [
  { path: "", component: DashboardComponent },
  { path: "admin", component: AdminComponent, children: ADMIN_ROUTES },
  { path: "doctor", component: DoctorComponent },
  { path: "**", redirectTo: "" }
];
