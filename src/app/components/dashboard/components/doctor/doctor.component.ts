import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-doctor",
  templateUrl: "./doctor.component.html",
  styleUrls: ["./doctor.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoctorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
