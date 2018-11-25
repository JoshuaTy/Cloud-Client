import { Component, Input } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.scss"]
})
export class UpdateComponent {
  @Input() title: string;

  constructor(protected ref: NbDialogRef<UpdateComponent>) {}

  dismiss() {
    this.ref.close();
  }
}
