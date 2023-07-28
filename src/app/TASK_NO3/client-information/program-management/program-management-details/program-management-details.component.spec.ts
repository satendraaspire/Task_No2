import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramManagementDetailsComponent } from './program-management-details.component';

describe('ProgramManagementDetailsComponent', () => {
  let component: ProgramManagementDetailsComponent;
  let fixture: ComponentFixture<ProgramManagementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramManagementDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramManagementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
