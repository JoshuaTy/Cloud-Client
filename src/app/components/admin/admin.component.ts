import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";


@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit {
  currentUser= JSON.parse(localStorage.getItem('currentUser'));
  userName:string;
  constructor() {}

  ngOnInit() {
    this.userName=this.currentUser.username;
  }
}
