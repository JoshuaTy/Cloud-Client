export class MedicineModel {
  medicineName: string;
  price: number;
  id: number;
  isArchived:boolean;
  public constructor(init?: Partial<MedicineModel>) {
    Object.assign(this, init);
  }
}
