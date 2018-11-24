import { Routes } from "@angular/router";
import { RegisterComponent } from "./pages/register.component";

export const REGISTER_ROUTES: Routes = [
  { path: "", component: RegisterComponent },
  { path: "**", redirectTo: "" }
];
