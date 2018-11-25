import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { config } from "src/app/_config/config";
import { HttpClient } from "@angular/common/http";
<<<<<<< HEAD
import { DatePipe } from '@angular/common'
import { Disease} from 'src/app/_models/disease';
import * as moment from 'moment';
import { UserService } from 'src/app/_services/user.service';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/_services/alert.service';
import { DiseaseModel } from 'src/app/_models/disease.model';
=======
import { DatePipe } from "@angular/common";
import { Disease } from "src/app/_models/disease";
import * as moment from "moment";
import { UserService } from "src/app/_services/user.service";
import { first } from "rxjs/operators";
import { AlertService } from "src/app/_services/alert.service";
import { DiseaseModel } from "src/app/_models/disease.model";
import { MedicineModel } from "src/app/_models/medicine.model";
>>>>>>> ee0144178b3027d1bd41cc989e9a81b9571d05b7

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
<<<<<<< HEAD
  sexes=[
    {value: 'Male', label: 'Male' },
    {value: 'Female', label: 'Female' },
  ]
 
  selectedOption:[];
  Diseases: any;
  selectedDisease: any;
  diseaseModels: DiseaseModel[];
=======
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
>>>>>>> ee0144178b3027d1bd41cc989e9a81b9571d05b7

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private datePipe: DatePipe,
    private userService: UserService,
<<<<<<< HEAD
    private alertService: AlertService,
    ) { 
      this.http.get(`${config.apiUrl}/diseases/findAll`).subscribe(data=>{
        this.diseaseModels= (<any>data).map(x => Object.assign({},x));
        this.selectedDisease=this.diseaseModels[0].diseaseName;
      });

    }

=======
    private alertService: AlertService
  ) {
    this.http.get(`${config.apiUrl}/diseases/findAll`).subscribe(data => {
      this.diseaseData = (<any>data).map(x => Object.assign({}, x));
      console.log(this.diseaseData);
    });
  }
>>>>>>> ee0144178b3027d1bd41cc989e9a81b9571d05b7

  get f() {
    return this.medicalRecordForm.controls;
  }
  ngOnInit() {
<<<<<<< HEAD
    //this.diseaseModels = this.datahubservice.getDiseases();
   
=======
>>>>>>> ee0144178b3027d1bd41cc989e9a81b9571d05b7
    this.medicalRecordForm = this.formBuilder.group({
      name: ["", Validators.required],
      sex: ["", Validators.required],
      birthday: ["", Validators.required],
<<<<<<< HEAD
      admissionDate:["", Validators.required],
      dischargeDate:["", Validators.required],
      diseaseModels:["", Validators.required],
      totalBill:["",Validators.required],
      Medicines:["",Validators.required],
      //password: ["", Validators.required]
=======
      admissionDate: ["", Validators.required],
      dischargeDate: ["", Validators.required],
      diseaseModels: ["", Validators.required],
      totalBill: ["", Validators.required]
>>>>>>> ee0144178b3027d1bd41cc989e9a81b9571d05b7
    });
    this.Diseases = [{    
      "Medicines": ""
    },
    ]; 

<<<<<<< HEAD
   
  }
  addDisease(){
    console.log("Adding disease");
  }
  computeTotalBill(){
    console.log("Computing Bill");
=======
  calculate(data: any) {
    data.forEach(element => {
      this.bill = +element.price;
    });
    console.log(this.bill);
>>>>>>> ee0144178b3027d1bd41cc989e9a81b9571d05b7
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
<<<<<<< HEAD
     // diseaseModels: this.diseaseIDs,
=======
      diseaseModels: this.diseaseIDs
>>>>>>> ee0144178b3027d1bd41cc989e9a81b9571d05b7
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
