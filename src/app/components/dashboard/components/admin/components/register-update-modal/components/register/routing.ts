import { Routes } from "@angular/router";
import { RegisterComponent } from "./pages/register.component";
import { RegisterAdminComponent } from "./components/register-admin/register-admin.component";
import { RegisterDiseaseComponent } from "./components/register-disease/register-disease.component";
import { RegisterMedicineComponent } from "./components/register-medicine/register-medicine.component";
import { RegisterDoctorComponent } from "./components/register-doctor/register-doctor.component";

export const REGISTER_ROUTES: Routes = [
  { path: "", component: RegisterComponent },
  { path: "admin", component: RegisterAdminComponent },
  { path: "doctor", component: RegisterDoctorComponent },
  { path: "medicine", component: RegisterMedicineComponent },
  { path: "disease", component: RegisterDiseaseComponent }
];
