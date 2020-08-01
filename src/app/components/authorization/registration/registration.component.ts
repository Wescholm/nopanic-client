import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
  validateUsername
} from "../../../validators/reg-validators";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {Subscription} from "rxjs";

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit, OnDestroy {

  private registerRequests: Subscription;
  public regForm: FormGroup;
  public isChecking: boolean;
  public userAvailability: string[] = ['UserName', 'Email'];

  constructor(
    private spinner: NgxSpinnerService,
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      UserName: ['', [validateUsername]],
      Email: new FormControl('', [validateEmail]),
      Password: ['', [validatePassword]],
      ConfirmPassword: ['', [Validators.required]]
    }, {validator: validateConfirmPassword('Password', 'ConfirmPassword')})
    this.userAvailability.forEach(controlName => this.checkUserAvailability(controlName));
  }

  ngOnDestroy(): void {
    if (this.registerRequests) {
      this.registerRequests.unsubscribe();
    }
  }

  checkControlsValidity(name: string): boolean {
    if (name === 'ConfirmPassword') {
      return this.regForm.hasError('message') && this.regForm.get(name).touched;
    }
    return this.regForm.get(name).touched && this.regForm.get(name).invalid;
  }

  checkFormValidity(): boolean  {
    return !(!this.regForm.valid || this.userAvailability.length != 2 || this.isChecking);
  }

  checkUserAvailability(type: string): void {
    const control = this.regForm.get(type);
    control.valueChanges.subscribe((data) => {
      if (control.valid) {
        this.spinner.show(type);
        this.isChecking = true;
        if (this.registerRequests) {
          this.registerRequests.unsubscribe();
        }
        this.registerRequests = this.authService.getUserAvailability(data, type)
          .subscribe((isAvailability) => {
            if (isAvailability) {
              if (!this.userAvailability.includes(type))  {
                this.userAvailability.push(type);
              }
            } else {
              this.userAvailability = this.userAvailability.filter(el => el != type);
            }
            this.isChecking = false;
            this.spinner.hide(type);
          })
      }
    })
  }

  getErrorMessage(controlName: string): string {
    if (controlName === 'ConfirmPassword') {
      return this.regForm.errors.message;
    }
    return this.regForm.get(controlName).errors.message;
  }

  submit(): void {
    if (this.checkFormValidity()) {
      this.spinner.show('Submit');
      this.registerRequests = this.authService.register(this.regForm.value)
        .subscribe(() => {
          this.router.navigate(['login'])
            .then(() => this.spinner.hide('Submit'));
        })
    }
  }
}
