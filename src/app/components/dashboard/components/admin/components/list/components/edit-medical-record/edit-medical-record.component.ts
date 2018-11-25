import { Component, OnInit ,Input} from '@angular/core';
import { Router } from "@angular/router";
import { NbDialogService } from "@nebular/theme";
import { ShowcaseDialogComponent } from "../showcase-dialog/showcase-dialog.component";

@Component({
  selector: 'app-edit-medical-record',
  templateUrl: './edit-medical-record.component.html',
  styleUrls: ['./edit-medical-record.component.scss']
})
export class EditMedicalRecordComponent implements OnInit {

  constructor(private router: Router, private dialogService: NbDialogService) {}
  @Input() rowData: any;
  id: number;
  ngOnInit() {
    this.id = this.rowData.id;
  }
  onClick() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: "Edit " + this.rowData.name + "'s information",
        type: 8,
        id: this.id
      }
      
    });
  }
}
