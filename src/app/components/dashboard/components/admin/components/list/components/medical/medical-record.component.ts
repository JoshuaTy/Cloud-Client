import { Component, OnInit } from "@angular/core";
import { EditButtonComponent } from "../edit-button/edit-button.component";
import { DeleteButtonComponent } from "../delete-button/delete-button.component";
import { HttpClient } from "@angular/common/http";
import { config } from "src/app/_config/config";
import { DropDownComponent } from "../drop-down/drop-down.component";
import { MedicalRecordModel } from "src/app/_models/medicalrecord.model";

@Component({
  selector: "app-medical",
  templateUrl: "./medical-record.component.html",
  styleUrls: ["./medical-record.component.scss"]
})
export class MedicalComponent implements OnInit {
  medicalData: MedicalRecordModel[];

  constructor(private http: HttpClient) {
    this.http.get(`${config.apiUrl}/mr/findAll`).subscribe(data => {
      this.medicalData = (<any>data).map(x => Object.assign({}, x));
    });
  }

  ngOnInit() {}

  get dData() {
    return this.medicalData;
  }

  settings = {
    pager: {
      display: true,
      perPage: 6
    },
    columns: {
      name: {
        title: "Patient Name"
      },
      birthday: {
        title: "Birthday"
      },
      sex: {
        title: "Sex"
      },
      admissionDate: {
        title: "Admission Date"
      },
      dischargeDate: {
        title: "Discharge Date"
      },
      totalBill: {
        title: "Total Bill"
      },
      // edit: {
      //   type: "custom",
      //   renderComponent: EditButtonComponent,
      //   width: "10%",
      //   filter: false
      // },
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
