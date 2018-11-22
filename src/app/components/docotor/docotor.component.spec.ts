import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocotorComponent } from './docotor.component';

describe('DocotorComponent', () => {
  let component: DocotorComponent;
  let fixture: ComponentFixture<DocotorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocotorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
