import { Component, OnInit } from "@angular/core";
import { EditButtonComponent } from "../edit-button/edit-button.component";
import { DeleteButtonComponent } from "../delete-button/delete-button.component";

@Component({
  selector: "app-medicine",
  templateUrl: "./medicine.component.html",
  styleUrls: ["./medicine.component.scss"]
})
export class MedicineComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  settings = {
    columns: {
      name: {
        title: "Name"
      },
      description: {
        title: "Description"
      },
      price: {
        title: "Price"
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
      name: "Paracetamol",
      description: "Relieves head aches.",
      price: 2
    },
    {
      name: "Antibiotics",
      description: "Prevents infection.",
      price: 20
    }
  ];
}
