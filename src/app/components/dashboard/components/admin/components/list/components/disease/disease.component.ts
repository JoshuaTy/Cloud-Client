import { Component, OnInit } from "@angular/core";
import { EditButtonComponent } from "../edit-button/edit-button.component";
import { DeleteButtonComponent } from "../delete-button/delete-button.component";
import { HttpClient } from "@angular/common/http";
import { config } from "src/app/_config/config";
import { DropDownComponent } from "../drop-down/drop-down.component";
import { DiseaseModel } from "src/app/_models/disease.model";

@Component({
  selector: "app-disease",
  templateUrl: "./disease.component.html",
  styleUrls: ["./disease.component.scss"]
})
export class DiseaseComponent implements OnInit {
  diseaseData: DiseaseModel[];

  constructor(private http: HttpClient) {
    this.http.get(`${config.apiUrl}/diseases/findAll`).subscribe(data => {
      this.diseaseData = (<any>data).map(x => Object.assign({}, x));
    });
  }

  ngOnInit() {}

  get dData() {
    return this.diseaseData;
  }

  settings = {
    columns: {
      diseaseName: {
        title: "Name"
      },
      medication: {
        title: "Medication/s",
        type: "custom",
        renderComponent: DropDownComponent,
        width: "20%",
        filter: false
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

  data = [];
}
