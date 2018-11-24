import { Component, OnInit } from "@angular/core";
import { MedicineModel } from "src/app/_models/medicine.model";
import { HttpClient } from "@angular/common/http";
import { config } from "src/app/_config/config";

@Component({
  selector: "app-drop-down",
  templateUrl: "./drop-down.component.html",
  styleUrls: ["./drop-down.component.scss"]
})
export class DropDownComponent implements OnInit {
  allProfiles: any = [
    {
      id: "1",
      value: "Levocitirizine"
    },
    {
      id: "2",
      value: "Paracetamol"
    },
    {
      id: "2",
      value: "Your mom"
    }
  ];

  selectedOption: any;

  medicineData: MedicineModel[];
  constructor(private http: HttpClient) {
    this.http.get(`${config.apiUrl}/medicines/findAll`).subscribe(data => {
      this.medicineData = (<any>data).map(x => Object.assign({}, x));
      console.log("medicine", this.medicineData);
    });
  }

  ngOnInit() {}

  getValues() {
    console.log(this.selectedOption);
  }
}
