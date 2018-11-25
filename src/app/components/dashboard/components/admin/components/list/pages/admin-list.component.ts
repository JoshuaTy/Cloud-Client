import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NbDialogService } from '@nebular/theme';
import { ShowcaseDialogComponent } from '../components/showcase-dialog/showcase-dialog.component';

@Component({
  selector: "app-admin-list",
  templateUrl: "./admin-list.component.html",
  styleUrls: ["./admin-list.component.scss"]
})
export class AdminListComponent implements OnInit {
  currentUser = JSON.parse(localStorage.getItem("currentUser"));
  userName: string;
  constructor(private router: Router, private dialogService: NbDialogService) {}

  ngOnInit() {
    this.userName = this.currentUser.firstName;
  }

  toRegister(link: string) {
    this.router.navigate(["dashboard/admin/register/" + link]);
  }

  open(i: number) {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: 'This is a title passed to the dialog component',
        type: i
      },
    });
  }
}
