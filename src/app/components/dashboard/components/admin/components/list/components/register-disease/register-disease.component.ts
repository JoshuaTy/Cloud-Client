import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/_services/user.service";
import { AlertService } from "src/app/_services/alert.service";
import { DiseaseModel } from "src/app/_models/disease.model";
import { first } from "rxjs/operators";
import { config } from "src/app/_config/config";
import { MedicineModel } from "src/app/_models/medicine.model";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-register-disease",
  templateUrl: "./register-disease.component.html",
  styleUrls: ["./register-disease.component.scss"]
})
export class RegisterDiseaseComponent implements OnInit {
  diseaseModel: DiseaseModel;
  registerForm: FormGroup;
  medicineData: MedicineModel;
  model: any = {
    diseaseName: String,
    medicinemodel:[],
  }
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
    private http: HttpClient
  ) {
    this.http.get(`${config.apiUrl}/medicines/findAll`).subscribe(data => {
      this.medicineData = (<any>data).map(x => Object.assign({}, x));
    });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      diseaseName: ["", Validators.required],
      medicinemodel: [{}]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.model.diseaseName = this.registerForm.value.diseaseName;
    this.registerForm.value.medicinemodel.forEach(element => {
      this.model.medicinemodel.push({
        "id": element
      })
    });

    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService
      .addDisease(this.model)
      .pipe(first())
      .subscribe(
        data => {},
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
    console.log(this.model);
  }
}
