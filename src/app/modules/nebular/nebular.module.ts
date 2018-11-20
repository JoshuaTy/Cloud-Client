import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NbLayoutModule,
  NbSidebarModule,
  NbSidebarService,
  NbCardModule,
  NbInputModule,
  NbButtonModule,
} from "@nebular/theme";

@NgModule({
  declarations: [],
  imports: [CommonModule, NbLayoutModule, NbSidebarModule, NbCardModule,NbInputModule,NbButtonModule],
  exports: [CommonModule, NbLayoutModule, NbSidebarModule, NbCardModule,NbInputModule, NbButtonModule],
  providers: [NbSidebarService]
})
export class NebularModule {}
