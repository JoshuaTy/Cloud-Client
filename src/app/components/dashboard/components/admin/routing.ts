import { Routes } from "@angular/router";
import { AdminListComponent } from "./components/list/pages/admin-list.component";

export const ADMIN_ROUTES: Routes = [
  { path: "list", component: AdminListComponent },
  {
    path: "modal",
    loadChildren:
      "./components/register-update-modal/register-update.module#RegisterUpdateModule"
  },
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "**", redirectTo: "list" }
];
