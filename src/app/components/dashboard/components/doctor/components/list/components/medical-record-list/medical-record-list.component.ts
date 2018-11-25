import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { config } from "src/app/_config/config";
import { MedicalRecordModel } from "src/app/_models/medicalRecord.model";
import {DeleteButtonComponent} from "../delete-button/delete-button.component";
import {EditButtonComponent} from "../edit-button/edit-button.component";

@Component({
  selector: 'app-medical-record-list',
  templateUrl: './medical-record-list.component.html',
  styleUrls: ['./medical-record-list.component.scss']
})
export class MedicalRecordListComponent implements OnInit {
  medicalrecordData: MedicalRecordModel[];

  constructor(private http: HttpClient) {
    this.http.get(`${config.apiUrl}/mr/findAll`).subscribe(data => {
      this.medicalrecordData = (<any>data).map(x => Object.assign({}, x));
    });
  }
  ngOnInit() {
    
  }
  settings = {
    columns: {
      name: {
        title: "Name"
      },
      sex: {
        title: "Sex",
        editable: "false"
      },
      birthday: {
        title: "Birthday"
      },
      admissionDate:{
        title: "Admission Date"
      },
      dischargeDate:{
        title: "Discharge Date"
      },
      totalBill:{
        title: "Total Bill"
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
}
