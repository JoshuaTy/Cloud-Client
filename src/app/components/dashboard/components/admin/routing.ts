import { Routes } from "@angular/router";
import { AdminListComponent } from "./components/list/pages/admin-list.component";
import { RegisterComponent } from "./components/register/pages/register.component";
import { REGISTER_ROUTES } from "./components/register/routing";
import { UpdateComponent } from "./components/update/pages/update.component";
import { UPDATE_ROUTES } from "./components/update/routing";

export const ADMIN_ROUTES: Routes = [
  // { path: "", component: AdminComponent },
  { path: "list", component: AdminListComponent },
  { path: "register", component: RegisterComponent, children: REGISTER_ROUTES },
  { path: "update", component: UpdateComponent, children: UPDATE_ROUTES },
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "**", redirectTo: "list" }
];
