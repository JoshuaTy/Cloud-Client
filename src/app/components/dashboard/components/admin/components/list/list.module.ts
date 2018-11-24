import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminListComponent } from "./pages/admin-list.component";
import { AdminsComponent } from "./components/admins/admins.component";
import { DeleteButtonComponent } from "./components/delete-button/delete-button.component";
import { DiseaseComponent } from "./components/disease/disease.component";
import { DoctorsComponent } from "./components/doctors/doctors.component";
import { MedicineComponent } from "./components/medicine/medicine.component";
import { EditButtonComponent } from "./components/edit-button/edit-button.component";
import { NebularModule } from "src/app/modules/nebular.module";

@NgModule({
  declarations: [
    AdminListComponent,
    AdminsComponent,
    DiseaseComponent,
    DoctorsComponent,
    MedicineComponent,
    EditButtonComponent,
    DeleteButtonComponent
  ],
  imports: [CommonModule, NebularModule],
  entryComponents: [EditButtonComponent, DeleteButtonComponent]
})
export class AdminListModule {}
