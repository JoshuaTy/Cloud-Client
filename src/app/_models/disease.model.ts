export class DiseaseModel {
    diseaseName: string;
    id: number;
    medicines: any;
    public constructor(init?: Partial<DiseaseModel>) {
      Object.assign(this, init);
    }
  }
  