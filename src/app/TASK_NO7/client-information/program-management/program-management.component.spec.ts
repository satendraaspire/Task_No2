import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramManagementSevenComponent } from './program-management.component';

describe('ProgramManagementComponent', () => {
  let component: ProgramManagementSevenComponent;
  let fixture: ComponentFixture<ProgramManagementSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramManagementSevenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramManagementSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
