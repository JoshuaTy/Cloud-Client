import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/_services/user.service';
import { AlertService } from 'src/app/_services/alert.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted= false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
                  firstName: ['', Validators.required],
                  lastName: ['', Validators.required],
                  email: ['', [Validators.required, Validators.maxLength(30)]],
                  username: ['', Validators.required],
                  password: ['', [Validators.required, Validators.minLength(6)]],
                 
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted=true;

    if(this.registerForm.invalid){
      return;
    }
    this.loading=true;
    this.userService.register(this.registerForm.value)
        .pipe(first())
        .subscribe(
               data => {
                    this.alertService.success('Registration successful', true);                               
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
  }

}
