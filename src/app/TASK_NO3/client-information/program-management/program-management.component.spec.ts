import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramManagementFirstComponent } from './program-management.component';

describe('ProgramManagementFirstComponent', () => {
  let component: ProgramManagementFirstComponent;
  let fixture: ComponentFixture<ProgramManagementFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramManagementFirstComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramManagementFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
