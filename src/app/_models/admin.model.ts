export class AdminModel {
  firstName: string;
  email: string;
  public constructor(init?: Partial<AdminModel>) {
    Object.assign(this, init);
  }
}
