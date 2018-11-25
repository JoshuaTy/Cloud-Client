import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MedicalRecordComponent } from "./components/medical-record/medical-record.component";
import { DoctorsComponent } from "./components/doctors/doctors.component";
import { PatientRecordComponent } from "./components/patient-record/patient-record.component";
import { DoctorComponent } from "./pages/doctor.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NebularModule } from "src/app/modules/nebular.module";
import { DoctorListComponent } from './components/list/pages/doctor-list/doctor-list.component';
//import { MedicalRecordListComponent } from './components/medical-record-list/medical-record-list.component';
import { EditButtonComponent } from './components/list/components/edit-button/edit-button.component';
import { DeleteButtonComponent } from './components/list/components/delete-button/delete-button.component';
import { ShowcaseDialogComponent } from './components/list/components/showcase-dialog/showcase-dialog.component';
import { MedicalRecordListModule } from "./components/list/list.module";

@NgModule({
  declarations: [
    MedicalRecordComponent,
    DoctorComponent,
    DoctorsComponent,
    PatientRecordComponent
  ],
  imports: [CommonModule, NebularModule , FormsModule, ReactiveFormsModule, MedicalRecordListModule]
})
export class DoctorModule {}
