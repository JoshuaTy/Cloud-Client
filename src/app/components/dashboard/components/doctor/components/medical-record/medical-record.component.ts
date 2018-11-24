import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.scss']
})
export class MedicalRecordComponent implements OnInit {
  medicalRecordForm: FormGroup;
  submitted:false;
  options=[
    {value: 'Male', label: 'Male' },
    {value: 'Female', label: 'Female' },
  ]

  constructor( 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
    ) { }


  get f(){
    return this.medicalRecordForm.controls;
  }
  ngOnInit() {
    this.medicalRecordForm = this.formBuilder.group({
      patientName: ["", Validators.required],
      sex: ["", Validators.required],
      birthday: ["", Validators.required],
      admissionDate:["", Validators.required],
      disChargeDate:["", Validators.required],
      //password: ["", Validators.required]
    });
  }

  computeTotalBill(){
    
  }

  onSubmit(){
    console.log(this.options.values);
  }

}
