import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NbLayoutModule,
  NbSidebarModule,
  NbSidebarService,
  NbCardModule,
  NbInputModule,
<<<<<<< HEAD
  NbButtonModule,
=======
  NbActionsModule,
  NbButtonModule,
  NbTabsetModule
>>>>>>> dc00290c20e7e0f84af40dde5462037698ebdfe5
} from "@nebular/theme";

@NgModule({
  declarations: [],
<<<<<<< HEAD
  imports: [CommonModule, NbLayoutModule, NbSidebarModule, NbCardModule,NbInputModule,NbButtonModule],
  exports: [CommonModule, NbLayoutModule, NbSidebarModule, NbCardModule,NbInputModule, NbButtonModule],
=======
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
>>>>>>> dc00290c20e7e0f84af40dde5462037698ebdfe5
  providers: [NbSidebarService]
})
export class NebularModule {}
