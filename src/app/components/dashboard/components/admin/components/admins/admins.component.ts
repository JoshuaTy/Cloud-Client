import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admins",
  templateUrl: "./admins.component.html",
  styleUrls: ["./admins.component.scss"]
})
export class AdminsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  settings = {
    columns: {
      name: {
        title: "Name"
      },
      email: {
        title: "Email"
      }
      // position: {
      //   title: "Position"
      // }
    }
  };

  data = [
    {
      name: "Daniel",
      email: "asdsad@asdas.com"
      // position: "Physician"
    },
    {
      name: "Ezekiel",
      email: "xx22@sad.org"
      // position: "Surgeon"
    }
  ];
}
