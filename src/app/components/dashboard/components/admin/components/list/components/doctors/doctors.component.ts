import { Component, OnInit } from "@angular/core";
import { EditButtonComponent } from "../edit-button/edit-button.component";
import { DeleteButtonComponent } from "../delete-button/delete-button.component";

@Component({
  selector: "app-doctors",
  templateUrl: "./doctors.component.html",
  styleUrls: ["./doctors.component.scss"]
})
export class DoctorsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  settings = {
    columns: {
      name: {
        title: "Name"
      },
      email: {
        title: "Email"
      },
      position: {
        title: "Position"
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
      email: "asdsad@asdas.com",
      position: "Physician"
    },
    {
      name: "Ezekiel",
      email: "xx22@sad.org",
      position: "Surgeon"
    }
  ];
}
