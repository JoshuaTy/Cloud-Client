//This service retrieves data from back-end, reformats the data received, then returns it to calling method
import { Injectable } from "@angular/core";

@Injectable()
export class DataHubService {
  //dummy BD
  private medicines: any = [
    {
      name: "Paracetamol",
      price: 2
    },
    {
      name: "Antibiotics",
      price: 20
    }
  ];
  private diseases: any = [
    {
      name: "Common Cold",
      medication: "Paracetamol"
    },
    {
      name: "Fever",
      medication: "Paracetamol"
    },
    {
      name: "Infection",
      medication: "Antibiotics"
    }
  ];
  private doctors: any = [
    {
      name: "Daniel",
      email: "dan@health.com"
    },
    {
      name: "Joshua",
      email: "jesh@med.org"
    }
  ];
  private admins: any = [
    {
      name: "Kasey",
      email: "kek@health.com"
    },
    {
      name: "Renz",
      email: "nyunyurk@med.org"
    }
  ];

  //methods for returning requested data
  getMedicines() {
    //reformatting method here
    return this.medicines;
  }
  getDiseases() {
    //reformatting method here
    return this.diseases;
  }
  getDoctors() {
    //reformatting method here
    return this.doctors;
  }
  getAdmins() {
    //reformatting method here
    return this.admins;
  }
}
