import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/_services/user.service";
import { AlertService } from "src/app/_services/alert.service";
import { first } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { config } from "src/app/_config/config";

@Component({
  selector: "app-update-medicine",
  templateUrl: "./update-medicine.component.html",
  styleUrls: ["./update-medicine.component.scss"]
})
export class UpdateMedicineComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  id: number;
  faceValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
    private http: HttpClient
  ) {
    this.id = JSON.parse(localStorage.getItem("id"));
    this.http.get(`${config.apiUrl}/medicines/${this.id}`).subscribe(data => {
      this.faceValue = <any>data;
      console.log(this.faceValue);
    });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      medicineName: ["", Validators.required],
      price: [parseFloat(""), Validators.required]
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
      .editMedicine(this.id, this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {},
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
    console.log("Updated", this.registerForm.value);
  }
}
