import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./pages/register.component";
import { RouterModule } from "@angular/router";
import { NebularModule } from "src/app/modules/nebular.module";
import { RegisterDiseaseComponent } from "./components/register-disease/register-disease.component";
import { RegisterMedicineComponent } from "./components/register-medicine/register-medicine.component";
import { RegisterDoctorComponent } from "./components/register-doctor/register-doctor.component";
import { RegisterAdminComponent } from "./components/register-admin/register-admin.component";
import {
  ReactiveFormsModule,
  ControlContainer,
  FormsModule
} from "@angular/forms";

@NgModule({
  declarations: [
    RegisterComponent,
    RegisterDiseaseComponent,
    RegisterMedicineComponent,
    RegisterDoctorComponent,
    RegisterAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NebularModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: []
})
export class RegisterModule {}
