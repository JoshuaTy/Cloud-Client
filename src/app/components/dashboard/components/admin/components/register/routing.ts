import { Routes } from "@angular/router";
import { RegisterComponent } from "./pages/register.component";
import { RegisterDiseaseComponent } from "./components/register-disease/register-disease.component";
import { RegisterMedicineComponent } from "./components/register-medicine/register-medicine.component";
import { RegisterDoctorComponent } from "./components/register-doctor/register-doctor.component";
import { RegisterAdminComponent } from "./components/register-admin/register-admin.component";

export const REGISTER_ROUTES: Routes = [
  { path: "disease", component: RegisterDiseaseComponent },
  { path: "medicine", component: RegisterMedicineComponent },
  { path: "doctor", component: RegisterDoctorComponent },
  { path: "admin", component: RegisterAdminComponent },
  { path: "", redirectTo: "disease", pathMatch: "full" },
  { path: "**", redirectTo: "", pathMatch: "full" }
];
