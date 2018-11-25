import { Component, OnInit } from "@angular/core";
import { EditButtonComponent } from "../edit-button/edit-button.component";
import { DeleteButtonComponent } from "../delete-button/delete-button.component";
import { HttpClient } from "@angular/common/http";
import { config } from "src/app/_config/config";
import { MedicineModel } from "src/app/_models/medicine.model";

@Component({
  selector: "app-medicine",
  templateUrl: "./medicine.component.html",
  styleUrls: ["./medicine.component.scss"]
})
export class MedicineComponent implements OnInit {
  medicineData: MedicineModel[];
  constructor(private http: HttpClient) {
    this.http.get(`${config.apiUrl}/medicines/findAll`).subscribe(data => {
      this.medicineData = (<any>data).map(x => Object.assign({}, x));
    });
  }

  ngOnInit() {}

  settings = {
    pager: {
      display: true,
      perPage: 6
    },
    columns: {
      medicineName: {
        title: "Name"
      },
      price: {
        title: "Price"
      },
      edit: {
        type: "custom",
        renderComponent: EditButtonComponent,
        width: "10%",
        filter: false
      },
      delete: {
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
}
