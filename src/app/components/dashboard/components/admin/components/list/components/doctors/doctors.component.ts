import { Component, OnInit } from "@angular/core";
import { EditButtonComponent } from "../edit-button/edit-button.component";
import { DeleteButtonComponent } from "../delete-button/delete-button.component";
import { DataHubService } from "src/app/_services/datahub.service";

@Component({
  selector: "app-doctors",
  templateUrl: "./doctors.component.html",
  styleUrls: ["./doctors.component.scss"]
})
export class DoctorsComponent implements OnInit {
  constructor(private DHS: DataHubService) {}

  ngOnInit() {
    this.data = this.DHS.getDoctors();
  }

  settings = {
    columns: {
      name: {
        title: "Name"
      },
      email: {
        title: "Email"
      },
      edit: {
        title: "Edit",
        type: "custom",
        renderComponent: EditButtonComponent,
        width: "10%",
        filter: false
      },
      delete: {
        title: "Delete",
        type: "custom",
        renderComponent: DeleteButtonComponent,
        width: "10%",
        filter: false
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
