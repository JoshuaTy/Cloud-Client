import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { NbDialogService } from "@nebular/theme";
import { RegisterUpdateModalComponent } from "../../../register-update-modal/pages/register-update-modal.component";

@Component({
  selector: "app-edit-button",
  templateUrl: "./edit-button.component.html",
  styleUrls: ["./edit-button.component.scss"]
})
export class EditButtonComponent implements OnInit {
  constructor(private router: Router, private dialogService: NbDialogService) {}
  @Input() rowData: any;
  id: number;
  ngOnInit() {
    this.id = this.rowData.id;
  }
  // onClick() {
  //   this.router.navigate(["dashboard/admin/update"]);
  // }
  onClick(updUrl: string) {
    this.dialogService.open(RegisterUpdateModalComponent, {
      context: {
        title: "Update",
        url: `update/${updUrl}`
      }
    });
  }
}
