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
    if(this.http.post(`${config.apiUrl}/${this.model}/delete/${this.id}`, this.id).subscribe(data => {
      console.log(data);
    })){
      window.location.reload();
      alert("Successful");
    }

  }
}
