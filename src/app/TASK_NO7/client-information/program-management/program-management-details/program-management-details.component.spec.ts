import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramManagementSevenDetailsComponent } from './program-management-details.component';

describe('ProgramManagementDetailsComponent', () => {
  let component: ProgramManagementSevenDetailsComponent;
  let fixture: ComponentFixture<ProgramManagementSevenDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramManagementSevenDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramManagementSevenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
