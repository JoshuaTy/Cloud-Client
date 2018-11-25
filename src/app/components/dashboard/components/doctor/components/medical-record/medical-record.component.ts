import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { config } from "src/app/_config/config";
import { HttpClient } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { Disease } from "src/app/_models/disease";
import * as moment from "moment";
import { UserService } from "src/app/_services/user.service";
import { first } from "rxjs/operators";
import { AlertService } from "src/app/_services/alert.service";
import { DiseaseModel } from "src/app/_models/disease.model";
import { MedicineModel } from "src/app/_models/medicine.model";

@Component({
  selector: "app-medical-record",
  templateUrl: "./medical-record.component.html",
  styleUrls: ["./medical-record.component.scss"]
})
export class MedicalRecordComponent implements OnInit {
  diseaseData: DiseaseModel[];
  medicalRecordForm: FormGroup;
  bill: number;
  submitted = false;
  sexes = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" }
  ];
  diseaseModels = [
    {
      diseaseName: "Fever",
      medicines: "Paracetamol"
    }
  ];
  selectedOption: [];

  diseaseIDs = [{ id: 1 }, { id: 2 }];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private datePipe: DatePipe,
    private userService: UserService,
    private alertService: AlertService
  ) {
    this.http.get(`${config.apiUrl}/diseases/findAll`).subscribe(data => {
      this.diseaseData = (<any>data).map(x => Object.assign({}, x));
      console.log(this.diseaseData);
    });
  }

  get f() {
    return this.medicalRecordForm.controls;
  }
  ngOnInit() {
    this.medicalRecordForm = this.formBuilder.group({
      name: ["", Validators.required],
      sex: ["", Validators.required],
      birthday: ["", Validators.required],
      admissionDate: ["", Validators.required],
      dischargeDate: ["", Validators.required],
      diseaseModels: ["", Validators.required],
      totalBill: ["", Validators.required]
    });
  }

  calculate(data: any) {
    data.forEach(element => {
      this.bill = +element.price;
    });
    console.log(this.bill);
  }

  onSubmit() {
    this.submitted = true;

    let diseaseModels: Disease[] = this.f.diseaseModels.value;

    for (let x = 0; x < diseaseModels.length; x++) {
      console.log(diseaseModels[x]);
    }
    let newAdmissionDate = this.f.admissionDate.value;
    newAdmissionDate = moment(this.f.admissionDate.value).format("YYYY-MM-DD");

    let newDischargeDate = this.f.dischargeDate.value;
    newDischargeDate = moment(this.f.dischargeDate.value).format("YYYY-MM-DD");

    let newBirthday = this.f.birthday.value;
    newBirthday = moment(this.f.birthday.value).format("YYYY-MM-DD");

    this.medicalRecordForm.patchValue({
      birthday: newBirthday,
      admissionDate: newAdmissionDate,
      dischargeDate: newDischargeDate,
      diseaseModels: this.diseaseIDs
    });

    console.log(this.medicalRecordForm.value);

    this.userService
      .addMedicalRecord(this.medicalRecordForm.value)
      .pipe(first())
      .subscribe(
        data => {},
        error => {
          this.alertService.error(error);
        }
      );
  }
}
