import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminModule } from "./components/admin/admin.module";
import { NebularModule } from "src/app/modules/nebular.module";
import { RouterModule } from "@angular/router";
import { DASHBOARD_ROUTES } from "./routing";

import { DashboardComponent } from "./pages/dashboard.component";
import { DoctorComponent } from "./components/doctor/doctor.component";
import { HeaderMenuComponent } from "./components/header-menu/header-menu.component";

@NgModule({
  declarations: [DoctorComponent, DashboardComponent, HeaderMenuComponent],
  imports: [
    CommonModule,
    AdminModule,
    NebularModule,
    RouterModule.forRoot(DASHBOARD_ROUTES)
  ],
  exports: [CommonModule, AdminModule]
})
export class DashboardModule {}
