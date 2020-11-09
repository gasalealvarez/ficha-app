import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOwnerComponent } from './modal-owner.component';

describe('ModalOwnerComponent', () => {
  let component: ModalOwnerComponent;
  let fixture: ComponentFixture<ModalOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
