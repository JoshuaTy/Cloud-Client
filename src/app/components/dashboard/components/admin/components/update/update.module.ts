import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UpdateComponent } from "./pages/update.component";
import { NebularModule } from "src/app/modules/nebular.module";
import { UpdateAdminComponent } from "./components/update-admin/update-admin.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UdateDoctorComponent } from "./components/udate-doctor/udate-doctor.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [UpdateComponent, UpdateAdminComponent, UdateDoctorComponent],
  imports: [
    CommonModule,
    NebularModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class UpdateModule {}
