import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-list",
  templateUrl: "./admin-list.component.html",
  styleUrls: ["./admin-list.component.scss"]
})
export class AdminListComponent implements OnInit {
  currentUser = JSON.parse(localStorage.getItem("currentUser"));
  userName: string;
  constructor() {}

  ngOnInit() {
    this.userName = this.currentUser.firstName;
  }
}
