import { Component, OnInit } from "@angular/core";
import { EditButtonComponent } from "../../../admin/components/list/components/edit-button/edit-button.component";
import { DeleteButtonComponent } from "../../../admin/components/list/components/delete-button/delete-button.component";
import { DoctorModel } from "src/app/_models/doctor.model";
import { HttpClient } from "@angular/common/http";
import { config } from "src/app/_config/config";

@Component({
  selector: "app-doctors",
  templateUrl: "./doctors.component.html",
  styleUrls: ["./doctors.component.scss"]
})
export class DoctorsComponent implements OnInit {
  doctorData: DoctorModel[];
  constructor(private http: HttpClient) {
    this.http.get(`${config.apiUrl}/users/getAll/doctor`).subscribe(data => {
      this.doctorData = (<any>data).map(x => Object.assign({}, x));
    });
  }

  ngOnInit() {}

  settings = {
    pager: {
      display: true,
      perPage: 10
    },
    columns: {
      firstName: {
        title: "FirstName"
      },
      lastName: {
        title: "LastName"
      },
      email: {
        title: "Email"
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    }
  };
}
