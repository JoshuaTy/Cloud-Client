import { Component, OnInit } from "@angular/core";
import { EditButtonComponent } from "../edit-button/edit-button.component";
import { DeleteButtonComponent } from "../delete-button/delete-button.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-disease",
  templateUrl: "./disease.component.html",
  styleUrls: ["./disease.component.scss"]
})
export class DiseaseComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  openDialog() {
    this.router.navigate(["dashboard/admin/register"]);
  }

  settings = {
    columns: {
      name: {
        title: "Name"
      },
      description: {
        title: "Description"
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
      name: "Common Cold",
      description: "You feel cold and dizzy."
    },
    {
      name: "Fever",
      description: "You feel warm and uncomfortable."
    }
  ];
}
