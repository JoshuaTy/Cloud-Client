import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<any>;
  
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(data =>{
      this.users = data;
    });
  }

  verify(): void{
    this.userService.verifyUser().subscribe(data =>{
      console.log(data);
    }, error => console.error(error));
  }

}
