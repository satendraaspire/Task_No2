import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from '../_service/client.service';
import { Router } from '@angular/router';
import { LoginType } from '../client-information.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormSevenComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private toastr: ToastrService,
    private service: ClientService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      password: new FormControl('', Validators.required),
    });
  }

  public get formControlsHandle() {
    return this.loginForm['controls'];
  }

  public onSubmit() {
    if (!this.loginForm.valid) {
      this.toastr.error('Invalid Form');
    } else {
      const { userName, password } = this.loginForm.value;
      this.service.getRegisterUser().subscribe((res) => {
        const isAvailable = res.find(
          (data: LoginType) =>
            data.username === userName && data.password === password
        );
        if (isAvailable) {
          sessionStorage.setItem('isValid', isAvailable.username);
          this.router.navigate(['/clients-informationss']);
        } else {
          this.toastr.error('Client not found');
        }
      });
    }
  }
}
