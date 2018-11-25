export class MedicalRecordModel {
    admissionDate: String;
    birthday: String;
    dischargeDate: String;
    name: String;
    sex: String;
    totalBill: number;
    diseaseModels: any;
    public constructor(init?: Partial<MedicalRecordModel>) {
      Object.assign(this, init);
    }
  }
  