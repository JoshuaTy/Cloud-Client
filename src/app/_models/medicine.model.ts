export class MedicineModel {
  medicineName: string;
  price: number;
  public constructor(init?: Partial<MedicineModel>) {
    Object.assign(this, init);
  }
}
