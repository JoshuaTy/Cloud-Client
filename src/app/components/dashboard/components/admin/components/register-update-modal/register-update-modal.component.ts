import { Component, Input } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";

@Component({
  selector: "app-register-update-modal",
  templateUrl: "./register-update-modal.component.html",
  styleUrls: ["./register-update-modal.component.scss"]
})
export class RegisterUpdateModalComponent {
  @Input() title: string;

  constructor(protected ref: NbDialogRef<RegisterUpdateModalComponent>) {}

  dismiss() {
    this.ref.close();
  }
}
