import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UpdateComponent } from "./pages/update.component";
import { NebularModule } from "src/app/modules/nebular.module";

@NgModule({
  declarations: [UpdateComponent],
  imports: [CommonModule, NebularModule]
})
export class UpdateModule {}
