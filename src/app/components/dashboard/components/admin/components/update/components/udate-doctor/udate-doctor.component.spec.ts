import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdateDoctorComponent } from './udate-doctor.component';

describe('UdateDoctorComponent', () => {
  let component: UdateDoctorComponent;
  let fixture: ComponentFixture<UdateDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdateDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdateDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
