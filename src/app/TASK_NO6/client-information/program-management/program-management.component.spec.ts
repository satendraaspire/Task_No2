import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramManagementSecondComponent } from './program-management.component';

describe('ProgramManagementComponent', () => {
  let component: ProgramManagementSecondComponent;
  let fixture: ComponentFixture<ProgramManagementSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramManagementSecondComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramManagementSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
