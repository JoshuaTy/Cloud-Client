import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthGuard } from "./_guards/auth.guard";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/pages/dashboard.component";
import { DASHBOARD_ROUTES } from "./components/dashboard/routing";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: DASHBOARD_ROUTES,
    canActivate: [AuthGuard]
  },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
