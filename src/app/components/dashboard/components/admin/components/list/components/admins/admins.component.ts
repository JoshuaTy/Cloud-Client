import { Component, OnInit } from "@angular/core";
import { DataHubService } from "src/app/_services/datahub.service";

@Component({
  selector: "app-admins",
  templateUrl: "./admins.component.html",
  styleUrls: ["./admins.component.scss"]
})
export class AdminsComponent implements OnInit {
  constructor(private DHS: DataHubService) {}

  ngOnInit() {
    this.data = this.DHS.getAdmins();
  }

  settings = {
    columns: {
      name: {
        title: "Name"
      },
      email: {
        title: "Email",
        editable: "false"
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    }
  };

  data = [];
}
