import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { AuthenticationService } from "src/app/_services/authentication.service";
import { AlertService } from "src/app/_services/alert.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: any;
  message: String;
  isError: boolean;

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
    this.message = "Please log in..";
    this.isError = false;

    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });

    // reset login status
    this.authenticationService.resetAll();

    // get return url from route parameters or default to '/'
    // this.returnUrl =
    this.route.snapshot.queryParams["returnUrl"] || "/dashboard";
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
            this.user = JSON.parse(localStorage.getItem("currentUser"));
            if (this.user) {
              this.returnUrl = "dashboard/" + this.user.usertype;
              console.log("Redirecting to", this.returnUrl);
              this.router.navigate([this.returnUrl]);
            } else {
              // alert("Username or password is incorrect!\nTry again.");
              this.message = "Username or password is incorrect!";
              this.isError = true;
            }
          },
          error => {
            console.log(error);
            this.alertService.error(error);
          }
        );
    }
  }
}
