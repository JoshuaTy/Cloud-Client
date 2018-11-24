import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDiseaseComponent } from './register-disease.component';

describe('RegisterDiseaseComponent', () => {
  let component: RegisterDiseaseComponent;
  let fixture: ComponentFixture<RegisterDiseaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDiseaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
