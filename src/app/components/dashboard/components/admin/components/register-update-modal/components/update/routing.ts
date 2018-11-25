import { Routes } from "@angular/router";
import { UpdateComponent } from "./pages/update.component";
import { UpdateAdminComponent } from "./components/update-admin/update-admin.component";

export const UPDATE_ROUTES: Routes = [
  { path: "", component: UpdateComponent },
  { path: "admin", component: UpdateAdminComponent }
  // { path: "doctor", component: RegisterDoctorComponent },
  // { path: "medicine", component: RegisterMedicineComponent },
  // { path: "disease", component: RegisterDiseaseComponent }
];
