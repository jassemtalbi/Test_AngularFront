import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEmployeAdminComponent } from './add-new-employe-admin.component';

describe('AddNewEmployeAdminComponent', () => {
  let component: AddNewEmployeAdminComponent;
  let fixture: ComponentFixture<AddNewEmployeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewEmployeAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewEmployeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
