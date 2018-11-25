import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { config } from "src/app/_config/config";
import { DiseaseModel } from "src/app/_models/disease.model";
import { rootRenderNodes } from "@angular/core/src/view";

@Component({
  selector: "app-delete-button",
  templateUrl: "./delete-button.component.html",
  styleUrls: ["./delete-button.component.scss"]
})
export class DeleteButtonComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  @Input() rowData: any;

  diseaseData: DiseaseModel;

  model: String;
  id: number;
  ngOnInit() {
    this.id = this.rowData.id;
  }

  delete = () => {
    if(this.rowData.diseaseName){
      this.model = "diseases";
    } else if (this.rowData.medicineName){
      this.model = "medicines";
    } else if (this.rowData.username){
      this.model = "users";
    } else {
      this.model = "mr";
    }

    // this.rowData.isArchived = true;
    // console.log(`${config.apiUrl}/${this.model}/delete?id=${this.id}`);
    console.log(`${config.apiUrl}/diseases/delete/${this.id}`);
    this.http.post(`${config.apiUrl}/diseases/delete/${this.id}`, this.id);
    // this.http.get(`${config.apiUrl}/${this.model}/findAll`).subscribe(data => {
    //   this.diseaseData = (<any>data).map(x => Object.assign({}, x));
    //   console.log(this.diseaseData)
    // });

  }
}
