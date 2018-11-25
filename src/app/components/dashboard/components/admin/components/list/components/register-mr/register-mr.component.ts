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
  selector: "app-register-mr",
  templateUrl: "./register-mr.component.html",
  styleUrls: ["./register-mr.component.scss"]
})
export class RegisterMRComponent implements OnInit {
  bill: number = 0;
  model: any = {
    name: String,
    birthday: Date,
    sex: String,
    admissionDate: Date,
    dischargeDate: Date,
    diseaseModels: [],
    totalBill: this.bill
  };

  diseaseData: DiseaseModel[];
  medicalRecordForm: FormGroup;
  submitted = false;
  sexes = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" }
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
      totalBill: ["", Validators.required],
      diseaseModels: [{}]
    });
  }

  onSubmit() {
    console.log(
      this.datePipe.transform(
        this.medicalRecordForm.value.admissionDate,
        "yyyy-MM-dd"
      )
    );
    this.model.totalBill = 1231231.23;
    this.model.name = this.medicalRecordForm.value.name;
    this.model.sex = this.medicalRecordForm.value.sex;
    this.model.birthday = this.datePipe.transform(
      this.medicalRecordForm.value.birthday,
      "yyyy-MM-dd"
    );
    this.model.admissionDate = this.datePipe.transform(
      this.medicalRecordForm.value.admissionDate,
      "yyyy-MM-dd"
    );
    this.model.dischargeDate = this.datePipe.transform(
      this.medicalRecordForm.value.dischargeDate,
      "yyyy-MM-dd"
    );
    this.medicalRecordForm.value.diseaseModels.forEach(element => {
      this.model.diseaseModels.push({
        id: element
      });
    });

    this.model.diseaseModels.forEach(element => {
      this.http.get(`${config.apiUrl}/diseases/${element.id}`).subscribe(data => {
        (<any>data).medicinemodel.forEach(data=>{
          this.model.totalBill += data.price;
        })
      });
    })
    this.model.totalBill +=1500;
    if(this.userService
      .addMedicalRecord(this.model)
      .pipe(first())
      .subscribe(
        data => {},
        error => {
          this.alertService.error(error);
        }
      )){
        window.location.reload();
        alert("Successful");
      }else{
        console.log("ASDA");
      }
  }
}
