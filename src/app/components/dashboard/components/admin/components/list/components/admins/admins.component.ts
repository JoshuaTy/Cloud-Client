import { Component, OnInit } from "@angular/core";
import { AdminModel } from "src/app/_models/admin.model";
import { HttpClient } from "@angular/common/http";
import { config } from "src/app/_config/config";

@Component({
  selector: "app-admins",
  templateUrl: "./admins.component.html",
  styleUrls: ["./admins.component.scss"]
})
export class AdminsComponent implements OnInit {
  adminData: AdminModel[];
  constructor(private http: HttpClient) {
    this.http.get(`${config.apiUrl}/users/getAll/admin`).subscribe(data => {
      this.adminData = (<any>data).map(x => Object.assign({}, x));
      console.log("admin", this.adminData);
    });
  }

  ngOnInit() {}

  settings = {
    columns: {
      firstName: {
        title: "Name"
      },
      email: {
        title: "Email",
        editable: "false"
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    }
  };
}
