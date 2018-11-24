import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/_services/authentication.service";

@Component({
  selector: "app-header-menu",
  templateUrl: "./header-menu.component.html",
  styleUrls: ["./header-menu.component.scss"]
})
export class HeaderMenuComponent implements OnInit {
  name: String;
  user: any = JSON.parse(localStorage.getItem("currentUser"));

  constructor(private AS: AuthenticationService) {}

  ngOnInit() {
    this.name = this.user.firstName;
  }

  logout() {
    this.AS.logout();
  }
}
