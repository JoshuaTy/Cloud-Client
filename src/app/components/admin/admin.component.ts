import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  settings = {
    columns: {
      name: {
        title: "Disease Name"
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
