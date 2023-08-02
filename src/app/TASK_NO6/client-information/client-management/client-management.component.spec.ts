import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientManagementSecondComponent } from './client-management.component';

describe('ClientManagementComponent', () => {
  let component: ClientManagementSecondComponent;
  let fixture: ComponentFixture<ClientManagementSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientManagementSecondComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientManagementSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
