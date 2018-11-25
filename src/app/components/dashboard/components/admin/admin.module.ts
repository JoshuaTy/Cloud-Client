import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./pages/admin.component";
import { NebularModule } from "src/app/modules/nebular.module";
import { RouterModule } from "@angular/router";
import { AdminListModule } from "./components/list/list.module";
import { RegisterModule } from "./components/register/register.module";
import { UpdateModule } from "./components/update/update.module";
import { RegisterUpdateModalComponent } from "./components/register-update-modal/register-update-modal.component";

@NgModule({
  declarations: [AdminComponent, RegisterUpdateModalComponent],
  imports: [
    CommonModule,
    NebularModule,
    AdminListModule,
    RouterModule,
    RegisterModule,
    UpdateModule
  ],
  entryComponents: [RegisterUpdateModalComponent]
})
export class AdminModule {}
