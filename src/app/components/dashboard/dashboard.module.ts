import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminModule } from "./components/admin/admin.module";
import { DoctorComponent } from "./components/doctor/doctor.component";
import { DashboardComponent } from "./pages/dashboard.component";
import { NebularModule } from "src/app/modules/nebular/nebular.module";
import { RouterModule } from "@angular/router";
import { DASHBOARD_ROUTES } from "./routing";

@NgModule({
  declarations: [DoctorComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminModule,
    NebularModule,
    RouterModule.forRoot(DASHBOARD_ROUTES)
  ],
  exports: [CommonModule, AdminModule]
})
export class DashboardModule {}
