import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./pages/admin.component";
import { NebularModule } from "src/app/modules/nebular.module";
import { RouterModule } from "@angular/router";
import { AdminListModule } from "./components/list/list.module";

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, NebularModule, AdminListModule, RouterModule]
})
export class AdminModule {}
