import { Component, Input, OnInit } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";

@Component({
  selector: "ngx-showcase-dialog",
  templateUrl: "showcase-dialog.component.html",
  styleUrls: ["showcase-dialog.component.scss"]
})
export class ShowcaseDialogComponent implements OnInit {
  @Input() title: string;
  @Input() type: number;
  @Input() id: number;
  @Input() data: any;

  constructor(protected ref: NbDialogRef<ShowcaseDialogComponent>) {}

  ngOnInit() {
    console.log(this.data);
    localStorage.setItem("id", JSON.stringify(this.id));
  }

  dismiss() {
    this.ref.close();
  }
}
