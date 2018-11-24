import { config } from "../_config/config";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../_models/user";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  addUser(x: User) {
    return this.http.post(`${config.apiUrl}/users/register`, x);
  }
  addMedicine(x: User) {
    return this.http.post(`${config.apiUrl}/medicines/add`, x);
  }
  addDisease(x: User) {
    return this.http.post(`${config.apiUrl}/diseases/add`, x);
  }
}
