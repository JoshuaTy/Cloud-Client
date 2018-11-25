import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DeleteButtonComponent } from "./components/delete-button/delete-button.component";
import { EditButtonComponent } from "./components/edit-button/edit-button.component";
import { ShowcaseDialogComponent } from "./components/showcase-dialog/showcase-dialog.component";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { NebularModule } from "src/app/modules/nebular.module";
import { NbDialogService } from "@nebular/theme";
import { MedicalRecordComponent } from "./pages/medical-record/medical-record.component";
import { MedicalRecordListComponent } from "./components/medical-record-list/medical-record-list.component";

@NgModule({
  declarations: [
    MedicalRecordComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    ShowcaseDialogComponent,
    MedicalRecordListComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule,NebularModule],
  entryComponents: [
    EditButtonComponent,
    DeleteButtonComponent,
    ShowcaseDialogComponent
  ],
  providers: [NbDialogService]
})
export class MedicalRecordListModule {}
