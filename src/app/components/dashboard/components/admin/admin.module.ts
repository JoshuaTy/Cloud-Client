import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./pages/admin.component";
import { NebularModule } from "src/app/modules/nebular.module";
import { RouterModule } from "@angular/router";
import { AdminListModule } from "./components/list/list.module";
import { RegisterUpdateModalComponent } from "./components/register-update-modal/pages/register-update-modal.component";

@NgModule({
  declarations: [AdminComponent, RegisterUpdateModalComponent],
  imports: [CommonModule, NebularModule, AdminListModule, RouterModule],
  entryComponents: [RegisterUpdateModalComponent]
})
export class AdminModule {}
