import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientManagementFirstComponent } from './client-management.component';

describe('ClientManagementComponent', () => {
  let component: ClientManagementFirstComponent;
  let fixture: ComponentFixture<ClientManagementFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientManagementFirstComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientManagementFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
