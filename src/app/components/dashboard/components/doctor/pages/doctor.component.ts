import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-doctor",
  templateUrl: "./doctor.component.html",
  styleUrls: ["./doctor.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoctorComponent implements OnInit {
  // medicalRecordForm: FormGroup;
  // submitted:false;
  
  constructor(   ) {}

  ngOnInit() {}
  // get f(){
  //   return this.medicalRecordForm.controls;
  // }
  // onSubmit(){

  // }
  
}
