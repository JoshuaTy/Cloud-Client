import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminModule } from "./components/admin/admin.module";
import { NebularModule } from "src/app/modules/nebular.module";
import { RouterModule } from "@angular/router";

import { DashboardComponent } from "./pages/dashboard.component";

import { HeaderMenuComponent } from "./components/header-menu/header-menu.component";
import { DoctorComponent } from "./components/doctor/pages/doctor.component";
import { DoctorModule } from "./components/doctor/doctor.module";

@NgModule({
  declarations: [DashboardComponent, HeaderMenuComponent],
  imports: [CommonModule, AdminModule, DoctorModule, NebularModule, RouterModule],
  exports: [CommonModule, AdminModule, DoctorModule]
})
export class DashboardModule {}
