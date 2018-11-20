import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NbLayoutModule,
  NbSidebarModule,
  NbSidebarService,
  NbCardModule,
  NbInputModule,
  NbActionsModule,
  NbButtonModule,
  NbTabsetModule
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
    NbTabsetModule
  ],
  exports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NbInputModule,
    NbActionsModule,
    NbButtonModule,
    NbTabsetModule
  ],
  providers: [NbSidebarService]
})
export class NebularModule {}
