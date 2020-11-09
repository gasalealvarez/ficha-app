import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBreedComponent } from './modal-breed.component';

describe('ModalBreedComponent', () => {
  let component: ModalBreedComponent;
  let fixture: ComponentFixture<ModalBreedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBreedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
