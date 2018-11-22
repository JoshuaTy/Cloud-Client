import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { AuthenticationService } from "src/app/_services/authentication.service";
import { AlertService } from "src/app/_services/alert.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  submitted = false;
  returnUrl: string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });

    // reset login status
    this.authenticationService.resetAll();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/admin";
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    //checks for credential validity
    if (!this.loginForm.invalid) {
      console.log("Login credentials:", this.loginForm.value);
      this.authenticationService
        .login(this.loginForm.value)
        .pipe(first())
        .subscribe(
          data => {
            console.log("Redirecting to", this.returnUrl);
            //must add optional parameters here
            this.router.navigate([this.returnUrl]);
          },
          error => {
            console.log(error);
            this.alertService.error(error);
          }
        );
    }
  }
}
