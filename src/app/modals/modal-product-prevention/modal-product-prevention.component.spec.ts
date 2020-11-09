import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProductPreventionComponent } from './modal-product-prevention.component';

describe('ModalProductPreventionComponent', () => {
  let component: ModalProductPreventionComponent;
  let fixture: ComponentFixture<ModalProductPreventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProductPreventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProductPreventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
