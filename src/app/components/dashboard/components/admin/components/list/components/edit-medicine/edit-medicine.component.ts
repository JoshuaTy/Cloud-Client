import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { NbDialogService } from "@nebular/theme";
import { ShowcaseDialogComponent } from "../showcase-dialog/showcase-dialog.component";

@Component({
  selector: "app-edit-medicine",
  templateUrl: "./edit-medicine.component.html",
  styleUrls: ["./edit-medicine.component.scss"]
})
export class EditMedicineComponent implements OnInit {
  constructor(private router: Router, private dialogService: NbDialogService) {}
  @Input() rowData: any;
  id: number;
  ngOnInit() {
    this.id = this.rowData.id;
  }
  onClick() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: "Edit " + this.rowData.medicineName + "'s information",
        type: 7,
        id: this.id
      }
    });
  }
}
