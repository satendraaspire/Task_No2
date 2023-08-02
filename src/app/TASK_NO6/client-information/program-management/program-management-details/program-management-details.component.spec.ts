import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramManagementSecondDetailsComponent } from './program-management-details.component';

describe('ProgramManagementDetailsComponent', () => {
  let component: ProgramManagementSecondDetailsComponent;
  let fixture: ComponentFixture<ProgramManagementSecondDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramManagementSecondDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramManagementSecondDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
