import { Routes } from "@angular/router";
import { RegisterUpdateModalComponent } from "./pages/register-update-modal.component";

export const REGISTER_UPDATE_ROUTES: Routes = [
  { path: "", component: RegisterUpdateModalComponent },
  {
    path: "register",
    loadChildren: "./components/register/register.module#RegisterModule"
  },
  {
    path: "update",
    loadChildren: "./components/update/update.module#UpdateModule"
  }
];
