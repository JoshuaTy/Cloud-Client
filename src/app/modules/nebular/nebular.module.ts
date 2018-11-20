import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NbLayoutModule,
  NbSidebarModule,
  NbSidebarService,
  NbCardModule
} from "@nebular/theme";

@NgModule({
  declarations: [],
  imports: [CommonModule, NbLayoutModule, NbSidebarModule, NbCardModule],
  exports: [CommonModule, NbLayoutModule, NbSidebarModule, NbCardModule],
  providers: [NbSidebarService]
})
export class NebularModule {}
