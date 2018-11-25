import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUpdateModalComponent } from './register-update-modal.component';

describe('RegisterUpdateModalComponent', () => {
  let component: RegisterUpdateModalComponent;
  let fixture: ComponentFixture<RegisterUpdateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterUpdateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
