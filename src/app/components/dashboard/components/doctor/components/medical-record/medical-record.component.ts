import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataHubService } from 'src/app/_services/datahub.service';
import { config } from "src/app/_config/config";
import { HttpClient } from "@angular/common/http";
import { DatePipe } from '@angular/common'
import { Disease} from 'src/app/_models/disease';
import * as moment from 'moment';
import { UserService } from 'src/app/_services/user.service';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.scss']
})
export class MedicalRecordComponent implements OnInit {
  medicalRecordForm: FormGroup;
  submitted = false;
  sexes=[
    {value: 'Male', label: 'Male' },
    {value: 'Female', label: 'Female' },
  ]
  diseaseModels= [];
  selectedOption:[];
  
  diseaseIDs=[
    {"id":1},
    {"id":2},
    ];

  constructor( 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private datahubservice:DataHubService,
    private http: HttpClient,
    private datePipe: DatePipe,
    private userService: UserService,
    private alertService: AlertService,
    ) { }


  get f(){
    return this.medicalRecordForm.controls;
  }
  ngOnInit() {
    this.diseaseModels = this.datahubservice.getDiseases();
    this.medicalRecordForm = this.formBuilder.group({
      name: ["", Validators.required],
      sex: ["", Validators.required],
      birthday: ["", Validators.required],
      admissionDate:["", Validators.required],
      dischargeDate:["", Validators.required],
      diseaseModels:["", Validators.required],
      totalBill:["",Validators.required],
      //password: ["", Validators.required]
    });
  }

  computeTotalBill(){
    
  }

  onSubmit(){
    this.submitted=true;

    // if (this.medicalRecordForm.invalid){
    //   return;
    // }

    let diseaseModels: Disease[] = this.f.diseaseModels.value;
  
    for (let x=0; x<diseaseModels.length;x++){
      console.log(diseaseModels[x]);     
    }
    let newAdmissionDate= this.f.admissionDate.value;
    newAdmissionDate=moment(this.f.admissionDate.value).format('YYYY-MM-DD');

    let newDischargeDate= this.f.dischargeDate.value;
    newDischargeDate=moment(this.f.dischargeDate.value).format('YYYY-MM-DD');

    let newBirthday= this.f.birthday.value;
    newBirthday=moment(this.f.birthday.value).format('YYYY-MM-DD');

    this.medicalRecordForm.patchValue({
      birthday: newBirthday,
      admissionDate: newAdmissionDate, 
      dischargeDate: newDischargeDate,
      diseaseModels: this.diseaseIDs,
    });
  
    console.log(this.medicalRecordForm.value);

    //this.loading = true;

    this.userService.
      addMedicalRecord(this.medicalRecordForm.value)
      .pipe(first())
      .subscribe(
        data => {},
        error => {
          
          this.alertService.error(error);
          //this.loading=false;
        }
      );
  }

}
