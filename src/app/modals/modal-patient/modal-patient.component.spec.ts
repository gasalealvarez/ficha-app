import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPatientComponent } from './modal-patient.component';

describe('ModalPatientComponent', () => {
  let component: ModalPatientComponent;
  let fixture: ComponentFixture<ModalPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
