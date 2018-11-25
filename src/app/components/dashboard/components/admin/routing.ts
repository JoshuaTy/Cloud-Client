import { Routes } from "@angular/router";
import { AdminListComponent } from "./components/list/pages/admin-list.component";

export const ADMIN_ROUTES: Routes = [
  // { path: "", component: AdminComponent },
  { path: "list", component: AdminListComponent },
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "**", redirectTo: "list" }
];
