export class MedicalRecordModel {
    name: string;
    birthday: string;
    admissionDate: string;
    dischargeDate: string;
    sex: string;
    totatBill: number;
    public constructor(init?: Partial<MedicalRecordModel>) {
      Object.assign(this, init);
    }
  }
  