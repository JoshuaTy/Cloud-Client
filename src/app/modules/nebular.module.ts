import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Ng2SmartTableModule } from "ng2-smart-table";
import {
  NbLayoutModule,
  NbSidebarModule,
  NbSidebarService,
  NbCardModule,
  NbInputModule,
  NbButtonModule,
  NbTabsetModule,
  NbDatepickerModule,
  NbNativeDateService,
  NbDatepickerAdapter,
  NbDatepickerDirective,
  NbDateService,
  NbDatepicker,
  NbRadioModule,
  NbSelectModule,
  NbActionsModule
} from "@nebular/theme";
import {NbDateFnsDateModule, NbDateFnsDateService} from "@nebular/date-fns";
import{ NbMomentDateModule, NbMomentDateService } from "@nebular/moment";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbTabsetModule,
    Ng2SmartTableModule,
    NbDatepickerModule,
    NbRadioModule,
    NbSelectModule,
    NbActionsModule,    
   // NbDateFnsDateModule,
  // NbMomentDateModule
  ],
  exports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbTabsetModule,
    Ng2SmartTableModule,
    NbDatepickerModule,
    NbRadioModule,
    NbSelectModule,
    NbActionsModule,
   // NbMomentDateModule
   // NbDateFnsDateModule,
  ],
  providers: [NbSidebarService,]
})
export class NebularModule {}
