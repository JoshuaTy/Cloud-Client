import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MedicineModel } from "src/app/_models/medicine.model";
import { HttpClient } from "@angular/common/http";
import { config } from "src/app/_config/config";


@Component({
  selector: "app-drop-down",
  templateUrl: "./drop-down.component.html",
  styleUrls: ["./drop-down.component.scss"]
})
export class DropDownComponent implements OnInit {
  selectedOption: any;
  medicineData: MedicineModel[];

  @Input() rowData: any;

  constructor(private http: HttpClient) {
    // this.http.get(`${config.apiUrl}/medicines/findAll`).subscribe(data => {
    //   this.medicineData = (<any>data).map(x => Object.assign({}, x));
    //   console.log("medicine", this.medicineData);
    // });
  }

  ngOnInit() {
    this.medicineData = this.rowData.medicinemodel;
  }
}
