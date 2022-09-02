import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEmployeComponent } from './add-new-employe.component';

describe('AddNewEmployeComponent', () => {
  let component: AddNewEmployeComponent;
  let fixture: ComponentFixture<AddNewEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
