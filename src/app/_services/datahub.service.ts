import { Injectable } from "@angular/core";

@Injectable()
export class DataHubService {
  //dummy BD
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
  getAdmins() {
    //reformatting method here
    return this.admins;
  }
  getDiseases() {
    //reformatting method here
    return this.diseases;
  }
  getDoctors() {
    //reformatting method here
    return this.doctors;
  }
  get_1_Admin() {
    //reformatting method here
    //return an entity object
  }

  get_1_Medicine() {
    //reformatting method here
    //return an entity object
  }
  get_1_Disease() {
    //reformatting method here
    //return an entity object
  }
  get_1_Doctor() {
    //reformatting method here
    //return an entity object
  }
}
