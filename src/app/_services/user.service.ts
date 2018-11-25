import { config } from "../_config/config";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../_models/user";
import { MedicineModel } from "../_models/medicine.model";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  addAdmin(x: User) {
    return this.http.post(`${config.apiUrl}/users/register/admin`, x);
  }
  addDoctor(x: User) {
    return this.http.post(`${config.apiUrl}/users/register/doctor`, x);
  }
  addMedicine(x: User) {
    return this.http.post(`${config.apiUrl}/medicines/add`, x);
  }
  addDisease(x: User) {
    return this.http.post(`${config.apiUrl}/diseases/add`, x);
  }
  addMedicalRecord(x: User) {
    return this.http.post(`${config.apiUrl}/mr/add`, x);
  }
  editDoctor(id: number, x: User) {
    return this.http.post(`${config.apiUrl}/users/update/${id}`, x);
  }
  editMedicine(id: number, x: MedicineModel) {
    return this.http.post(`${config.apiUrl}/medicines/update/${id}`, x);
  }
}
