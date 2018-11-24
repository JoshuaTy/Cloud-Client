import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit-button",
  templateUrl: "./edit-button.component.html",
  styleUrls: ["./edit-button.component.scss"]
})
export class EditButtonComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onClick() {
    this.router.navigate(["dashboard/admin/update"]);
  }
}
