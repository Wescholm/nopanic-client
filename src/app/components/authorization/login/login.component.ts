import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private loginRequest: Subscription;
  public logForm: FormGroup;
  public errorMsg: string;

  constructor(
    private spinner: NgxSpinnerService,
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.logForm = this.formBuilder.group({
      Email: '',
      Password: '',
    })
  }

  ngOnDestroy(): void {
    if (this.loginRequest) {
      this.loginRequest.unsubscribe();
    }
  }

  submit(): void {
    if (this.logForm.valid) {
      this.spinner.show('Submit');
      this.loginRequest = this.authService.login(this.logForm.value)
        .subscribe((data) => {
          if (data === true) {
            this.router.navigate(['/services'])
              .then(() => location.reload());
          } else {
            this.errorMsg = data.error;
            this.spinner.hide('Submit');
          }
        })
    }
  }
}
