import { Routes } from "@angular/router";
import { AdminListComponent } from "./components/list/pages/admin-list.component";
import { RegisterComponent } from "./components/register/pages/register.component";
import { REGISTER_ROUTES } from "./components/register/routing";

export const ADMIN_ROUTES: Routes = [
  // { path: "", component: AdminComponent },
  { path: "list", component: AdminListComponent },
  { path: "register", component: RegisterComponent, children: REGISTER_ROUTES },
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "**", redirectTo: "list" }
];
