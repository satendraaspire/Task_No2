import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramManagementFirstDetailComponent } from './program-management-details.component';

describe('ProgramManagementFirstDetailsComponent', () => {
  let component: ProgramManagementFirstDetailComponent;
  let fixture: ComponentFixture<ProgramManagementFirstDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramManagementFirstDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramManagementFirstDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
