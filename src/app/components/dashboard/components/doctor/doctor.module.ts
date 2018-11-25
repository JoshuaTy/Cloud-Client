import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MedicalRecordComponent } from "./components/medical-record/medical-record.component";
import { DoctorsComponent } from "./components/doctors/doctors.component";
import { PatientRecordComponent } from "./components/patient-record/patient-record.component";
import { DoctorComponent } from "./pages/doctor.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NebularModule } from "src/app/modules/nebular.module";

@NgModule({
  declarations: [
    MedicalRecordComponent,
    DoctorComponent,
    DoctorsComponent,
    PatientRecordComponent
  ],
  imports: [CommonModule, NebularModule , FormsModule, ReactiveFormsModule]
})
export class DoctorModule {}
