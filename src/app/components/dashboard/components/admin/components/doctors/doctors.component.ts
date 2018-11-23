import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-doctors",
  templateUrl: "./doctors.component.html",
  styleUrls: ["./doctors.component.scss"]
})
export class DoctorsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  settings = {
    columns: {
      name: {
        title: "Name"
      },
      email: {
        title: "Email"
      },
      position: {
        title: "Position"
      }
    }
  };

  data = [
    {
      name: "Daniel",
      email: "asdsad@asdas.com",
      position: "Physician"
    },
    {
      name: "Ezekiel",
      email: "xx22@sad.org",
      position: "Surgeon"
    }
  ];
}
