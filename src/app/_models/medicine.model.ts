export class MedicineModel {
  medicineName: string;
  price: number;
  id: number;
  public constructor(init?: Partial<MedicineModel>) {
    Object.assign(this, init);
  }
}
