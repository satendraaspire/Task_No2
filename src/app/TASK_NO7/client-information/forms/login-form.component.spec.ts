import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormSevenComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormSevenComponent;
  let fixture: ComponentFixture<LoginFormSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFormSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
