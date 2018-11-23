import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-disease",
  templateUrl: "./disease.component.html",
  styleUrls: ["./disease.component.scss"]
})
export class DiseaseComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  settings = {
    columns: {
      name: {
        title: "Name"
      },
      description: {
        title: "Description"
      }
    }
  };

  data = [
    {
      name: "Common Cold",
      description: "You feel cold and dizzy."
    },
    {
      name: "Fever",
      description: "You feel warm and uncomfortable."
    }
  ];
}
