import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NebularModule } from "src/app/modules/nebular/nebular.module";
import { MedicalRecordComponent } from "./components/medical-record/medical-record.component";
import { DoctorComponent } from "./pages/doctor.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    MedicalRecordComponent,
    DoctorComponent,
  ],
  imports: [CommonModule, NebularModule, FormsModule, ReactiveFormsModule]
})
export class DoctorModule {}
