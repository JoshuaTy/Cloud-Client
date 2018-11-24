import { Component, OnInit } from "@angular/core";
import { EditButtonComponent } from "../edit-button/edit-button.component";
import { DeleteButtonComponent } from "../delete-button/delete-button.component";
import { DataHubService } from "src/app/_services/datahub.service";
import { HttpClient } from "@angular/common/http";
import { MedicineModel } from "src/app/_services/_models/medicine.model";
import { config } from "src/app/_config/config";

@Component({
  selector: "app-medicine",
  templateUrl: "./medicine.component.html",
  styleUrls: ["./medicine.component.scss"]
})
export class MedicineComponent implements OnInit {

  medicineData: MedicineModel[];

  constructor(private DHS: DataHubService, private http: HttpClient){
    this.http.get(`${config.apiUrl}/medicines/findAll`).subscribe(data => {
      this.medicineData = (<any>data).map(x => Object.assign({}, x))
    })
  }

  ngOnInit() {
    this.data = this.DHS.getMedicines();
  }

  settings = {
    columns: {
      medicineName: {
        title: "Name"
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

  data = [];
  dataM = [];
}
