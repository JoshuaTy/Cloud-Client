import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminListComponent } from "./pages/admin-list.component";
import { AdminsComponent } from "./components/admins/admins.component";
import { DeleteButtonComponent } from "./components/delete-button/delete-button.component";
import { DiseaseComponent } from "./components/disease/disease.component";
import { MedicalComponent } from "./components/medical/medical-record.component";
import { DoctorsComponent } from "./components/doctors/doctors.component";
import { MedicineComponent } from "./components/medicine/medicine.component";
import { EditButtonComponent } from "./components/edit-button/edit-button.component";
import { ShowcaseDialogComponent } from "./components/showcase-dialog/showcase-dialog.component";
import { DropDownComponent } from "./components/drop-down/drop-down.component";
import { FormsModule } from "@angular/forms";
import { NebularModule } from "src/app/modules/nebular.module";
import { NbDialogService } from "@nebular/theme";
import { RegisterAdminComponent } from "./components/register-admin/register-admin.component";
import { RegisterDiseaseComponent } from "./components/register-disease/register-disease.component";
import { RegisterDoctorComponent } from "./components/register-doctor/register-doctor.component";
import { RegisterMedicineComponent } from "./components/register-medicine/register-medicine.component";
import { UpdateDoctorComponent } from "./components/update-doctor/update-doctor.component";
import { UpdateMedicineComponent } from "./components/update-medicine/update-medicine.component";
import { EditMedicineComponent } from "./components/edit-medicine/edit-medicine.component";
import { RegisterMRComponent } from "./components/register-mr/register-mr.component";
import { EditMedicalRecordComponent } from './components/edit-medical-record/edit-medical-record.component';
import { UpdateMedicalRecordComponent } from './components/update-medical-record/update-medical-record.component';

@NgModule({
  declarations: [
    AdminListComponent,
    AdminsComponent,
    DiseaseComponent,
    DoctorsComponent,
    MedicineComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    DropDownComponent,
    ShowcaseDialogComponent,
    MedicalComponent,
    RegisterAdminComponent,
    RegisterDiseaseComponent,
    RegisterDoctorComponent,
    RegisterMedicineComponent,
    UpdateDoctorComponent,
    UpdateMedicineComponent,
    EditMedicineComponent,
    RegisterMRComponent,
    EditMedicalRecordComponent,
    UpdateMedicalRecordComponent
  ],
  imports: [CommonModule, FormsModule, NebularModule],
  entryComponents: [
    EditButtonComponent,
    DeleteButtonComponent,
    DropDownComponent,
    ShowcaseDialogComponent,
    MedicalComponent,
    EditMedicineComponent,
    EditMedicalRecordComponent
  ],
  providers: [NbDialogService]
})
export class AdminListModule {}
