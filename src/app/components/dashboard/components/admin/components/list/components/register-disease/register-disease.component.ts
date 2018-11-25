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
      medicinemodel_id: [{}]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService
      .addDisease(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {},
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
    console.log("Registered", this.registerForm.value);
  }
}
