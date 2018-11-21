import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-medicine",
  templateUrl: "./medicine.component.html",
  styleUrls: ["./medicine.component.scss"]
})
export class MedicineComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  settings = {
    columns: {
      name: {
        title: "Medicine Name"
      },
      description: {
        title: "Description"
      },
      price: {
        title: "Price"
      }
    }
  };

  data = [
    {
      name: "Paracetamol",
      description: "Relieves head aches.",
      price: 2
    },
    {
      name: "Antibiotics",
      description: "Prevents infection.",
      price: 20
    }
  ];
}
