import { Routes } from "@angular/router";
import { UpdateComponent } from "./pages/update.component";

export const UPDATE_ROUTES: Routes = [
  { path: "", component: UpdateComponent },
  { path: "**", redirectTo: "", pathMatch: "full" }
];
