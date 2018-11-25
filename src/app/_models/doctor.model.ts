export class DoctorModel {
  firstName: string;
  email: string;
  public constructor(init?: Partial<DoctorModel>) {
    Object.assign(this, init);
  }
}
