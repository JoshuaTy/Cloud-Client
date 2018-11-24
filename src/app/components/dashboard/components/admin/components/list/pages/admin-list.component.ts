import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-list",
  templateUrl: "./admin-list.component.html",
  styleUrls: ["./admin-list.component.scss"]
})
export class AdminListComponent implements OnInit {
  currentUser = JSON.parse(localStorage.getItem("currentUser"));
  userName: string;
  constructor(private router: Router) {}

  ngOnInit() {
    this.userName = this.currentUser.firstName;
  }

  toRegister(link: string) {
    this.router.navigate(["dashboard/admin/register/" + link]);
  }
}
