import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminModule } from "./components/admin/admin.module";
import { DoctorComponent } from "./components/doctor/pages/doctor.component";
import { DashboardComponent } from "./pages/dashboard.component";
import { NebularModule } from "src/app/modules/nebular/nebular.module";
import { RouterModule } from "@angular/router";
import { DASHBOARD_ROUTES } from "./routing";
import { DoctorModule } from "./components/doctor/doctor.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AdminModule,
    DoctorModule,
    NebularModule,
    RouterModule.forRoot(DASHBOARD_ROUTES)
  ],
  exports: [CommonModule, AdminModule]
})
export class DashboardModule {}
