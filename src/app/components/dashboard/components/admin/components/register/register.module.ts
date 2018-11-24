import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./pages/register.component";
import { RouterModule } from "@angular/router";
import { NebularModule } from "src/app/modules/nebular.module";

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RouterModule, NebularModule]
})
export class RegisterModule {}
