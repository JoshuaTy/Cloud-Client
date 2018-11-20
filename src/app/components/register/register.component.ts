import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted= false;

  constructor(private formBuilder: FormBuilder) { }

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
    
  }

}
