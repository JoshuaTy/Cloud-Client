import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { AuthenticationService } from "src/app/_services/authentication.service";

@Component({
  selector: "app-header-menu",
  templateUrl: "./header-menu.component.html",
  styleUrls: ["./header-menu.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderMenuComponent implements OnInit {
  currentUser = JSON.parse(localStorage.getItem("currentUser"));
  userName: string;

  constructor(private AS: AuthenticationService) {}

  ngOnInit() {
    if (this.currentUser) {
      this.userName = this.currentUser.firstName;
    } else {
      this.userName = "";
    }
  }

  logout() {
    this.AS.logout();
  }
}
