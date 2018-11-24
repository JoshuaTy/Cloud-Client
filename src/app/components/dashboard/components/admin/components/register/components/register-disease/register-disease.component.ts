import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/_services/user.service";
import { AlertService } from "src/app/_services/alert.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-register-disease",
  templateUrl: "./register-disease.component.html",
  styleUrls: ["./register-disease.component.scss"]
})
export class RegisterDiseaseComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) {}

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
    // this.userService
    //   .addDisease(this.registerForm.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {},
    //     error => {
    //       this.alertService.error(error);
    //       this.loading = false;
    //     }
    //   );
    console.log("Registered", this.registerForm.value);
    this.router.navigate(["dashboard/admin/list"]);
  }
}
