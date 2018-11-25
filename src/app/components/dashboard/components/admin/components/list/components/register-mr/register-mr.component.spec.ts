import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMRComponent } from './register-mr.component';

describe('RegisterDoctorComponent', () => {
  let component: RegisterMRComponent;
  let fixture: ComponentFixture<RegisterMRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
