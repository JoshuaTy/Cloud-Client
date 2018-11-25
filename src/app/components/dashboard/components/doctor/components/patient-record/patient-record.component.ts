import { Component, OnInit, Input } from '@angular/core';
import { MedicalRecordModel } from "src/app/_models/medicalrecord.model";
import { HttpClient } from "@angular/common/http";
import { config } from "src/app/_config/config";
import { DeleteButtonComponent } from "../../../admin/components/list/components/delete-button/delete-button.component";
import { EditMedicalRecordComponent } from '../../../admin/components/list/components/edit-medical-record/edit-medical-record.component';

@Component({
  selector: 'app-patient-record',
  templateUrl: './patient-record.component.html',
  styleUrls: ['./patient-record.component.scss']
})
export class PatientRecordComponent implements OnInit {medicalData: MedicalRecordModel[];
  
  patient: any;
  loaded: boolean = false;

  constructor(private http: HttpClient) {
    
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
      
      edit: {
        type: "custom",
        renderComponent: EditMedicalRecordComponent,
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

  onKey(event){
    if(this.patient){
      this.loaded = true;
      this.http.get(`${config.apiUrl}/mr/search/${this.patient}`).subscribe(data => {
        this.medicalData = (<any>data).map(x => Object.assign({}, x));
      });
    } else {
      this.loaded = false;
    }
  }

}
