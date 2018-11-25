import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterModule } from "./components/register/register.module";
import { UpdateModule } from "./components/update/update.module";
import { RegisterUpdateModalComponent } from "./pages/register-update-modal.component";
import { RegisterAdminComponent } from "./components/register/components/register-admin/register-admin.component";
import { RegisterMedicineComponent } from "./components/register/components/register-medicine/register-medicine.component";
import { RouterModule } from "@angular/router";
import { REGISTER_UPDATE_ROUTES } from "./routing";

@NgModule({
  declarations: [
    RegisterUpdateModalComponent,
    RegisterAdminComponent,
    RegisterMedicineComponent
  ],
  imports: [
    CommonModule,
    RegisterModule,
    UpdateModule,
    RouterModule.forChild(REGISTER_UPDATE_ROUTES)
  ],
  exports: [CommonModule, RegisterModule, UpdateModule, RouterModule]
})
export class RegisterUpdateModule {}
