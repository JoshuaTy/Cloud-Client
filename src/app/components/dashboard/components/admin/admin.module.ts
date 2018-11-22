import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DoctorsComponent } from "./components/doctors/doctors.component";
import { DiseaseComponent } from "./components/disease/disease.component";
import { MedicineComponent } from "./components/medicine/medicine.component";
import { AdminComponent } from "./pages/admin.component";
import { NebularModule } from "src/app/modules/nebular/nebular.module";

@NgModule({
  declarations: [
    DoctorsComponent,
    DiseaseComponent,
    MedicineComponent,
    AdminComponent
  ],
  imports: [CommonModule, NebularModule]
})
export class AdminModule {}
