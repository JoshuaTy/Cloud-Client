import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.scss"]
})
export class NotFoundComponent implements OnInit {
  constructor(private R: Router) {}

  ngOnInit() {}

  toLogin() {
    console.log("Redirecting to /login");
    this.R.navigate(["/login"]);
  }
}
