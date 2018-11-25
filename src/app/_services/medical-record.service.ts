import { config } from '../_config/config';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Disease} from 'src/app/_models/disease';

@Injectable()
export class MedicalRecordService {

  constructor(private http: HttpClient) { }

  searchByDiseaseName(disease: Disease){
    //  return this.http.post(`${config.apiUrl}/mr/search/${disease}`, disease);
  }
}
