import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/_services/authentication.service";

@Component({
  selector: "app-header-menu",
  templateUrl: "./header-menu.component.html",
  styleUrls: ["./header-menu.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderMenuComponent implements OnInit {
  constructor(private AS: AuthenticationService) {}

  ngOnInit() {}

  logout() {
    this.AS.logout();
  }
}
