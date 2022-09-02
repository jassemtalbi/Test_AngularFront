import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettAllComponent } from './gett-all.component';

describe('GettAllComponent', () => {
  let component: GettAllComponent;
  let fixture: ComponentFixture<GettAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GettAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
