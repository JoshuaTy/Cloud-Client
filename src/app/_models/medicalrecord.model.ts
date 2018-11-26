export class MedicalRecordModel {
    name: string;
    birthday: Date;
    sex: string;
    admissionDate: Date;
    dischargeDate: Date;
    diseaseModels: [];
    totalBill: number;
  
    public constructor(init?: Partial<MedicalRecordModel>) {
      Object.assign(this, init);
    }
  }
  