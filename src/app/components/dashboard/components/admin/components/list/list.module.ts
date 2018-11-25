import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminListComponent } from "./pages/admin-list.component";
import { AdminsComponent } from "./components/admins/admins.component";
import { DeleteButtonComponent } from "./components/delete-button/delete-button.component";
import { DiseaseComponent } from "./components/disease/disease.component";
import { DoctorsComponent } from "./components/doctors/doctors.component";
import { MedicineComponent } from "./components/medicine/medicine.component";
import { EditButtonComponent } from "./components/edit-button/edit-button.component";
import { DataHubService } from "src/app/_services/datahub.service";
import { DropDownComponent } from "./components/drop-down/drop-down.component";
import { FormsModule } from "@angular/forms";
import { NebularModule } from "src/app/modules/nebular.module";

@NgModule({
  declarations: [
    AdminListComponent,
    AdminsComponent,
    DiseaseComponent,
    DoctorsComponent,
    MedicineComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    DropDownComponent
  ],
  imports: [CommonModule, FormsModule, NebularModule],
  entryComponents: [
    EditButtonComponent,
    DeleteButtonComponent,
    DropDownComponent
  ],
  providers: [DataHubService]
})
export class AdminListModule {}
