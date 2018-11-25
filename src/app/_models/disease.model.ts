export class DiseaseModel {
  diseaseName: string;
  // id: number;
  medicines: any;
  // isArchived:boolean;
  public constructor(init?: Partial<DiseaseModel>) {
    Object.assign(this, init);
  }
}
