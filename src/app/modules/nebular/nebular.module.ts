import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Ng2SmartTableModule } from "ng2-smart-table";
import {
  NbLayoutModule,
  NbSidebarModule,
  NbSidebarService,
  NbCardModule,
  NbInputModule,
  NbActionsModule,
  NbButtonModule,
  NbTabsetModule,
} from "@nebular/theme";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NbInputModule,
    NbActionsModule,
    NbButtonModule,
    NbTabsetModule,
    Ng2SmartTableModule,
  ],
  exports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NbInputModule,
    NbActionsModule,
    NbButtonModule,
    NbTabsetModule,
    Ng2SmartTableModule,
  ],
  providers: [NbSidebarService]
})
export class NebularModule {}
