import { Component, OnInit } from "@angular/core";
import { EditButtonComponent } from "../edit-button/edit-button.component";
import { DeleteButtonComponent } from "../delete-button/delete-button.component";

@Component({
  selector: "app-admins",
  templateUrl: "./admins.component.html",
  styleUrls: ["./admins.component.scss"]
})
export class AdminsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  settings = {
    columns: {
      name: {
        title: "Name"
      },
      email: {
        title: "Email",
        editable: "false"
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

  data = [
    {
      name: "Daniel",
      email: "asdsad@asdas.com"
    },
    {
      name: "Ezekiel",
      email: "xx22@sad.org"
    }
  ];
}
