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
  NbDatepickerModule,
  NbNativeDateService,
  NbDatepickerAdapter,
  NbDatepickerDirective,
  NbDateService,
  NbDatepicker,
  NbRadioModule,
  NbSelectModule
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
    NbDatepickerModule,
    NbRadioModule,
    NbSelectModule,
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
    NbDatepickerModule,
    NbRadioModule,
    NbSelectModule,
  ],
  providers: [NbSidebarService,NbDatepickerDirective]
})
export class NebularModule {}
