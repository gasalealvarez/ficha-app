import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOnwnersComponent } from './list-owners.component';

describe('ListOwnersComponent', () => {
  let component: ListOnwnersComponent;
  let fixture: ComponentFixture<ListOnwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOnwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOnwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
