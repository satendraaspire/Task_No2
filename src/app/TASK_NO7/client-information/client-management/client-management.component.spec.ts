import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientManagementSevenComponent } from './client-management.component';

describe('ClientManagementComponent', () => {
  let component: ClientManagementSevenComponent;
  let fixture: ComponentFixture<ClientManagementSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientManagementSevenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientManagementSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
