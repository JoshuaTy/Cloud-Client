import { config } from '../_config/config';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {User} from '../_models/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: User){
      return this.http.post(`${config.apiUrl}/users/register`, user);
  }






  addMedicalRecord(x:User){
    return this.http.post(`${config.apiUrl}/mr/add`,x);
  }
}
