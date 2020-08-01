import {AbstractControl, FormGroup} from "@angular/forms";

export function validateUsername(control: AbstractControl): {[key: string]: any} | null  {
  if (control.value.length < 4) return { message: 'Username cannot be less than 4 characters' };
  if (control.value.length > 12) return { message: 'Username cannot be more than 12 characters' };
  if (!control.value.match(/^[0-9a-zA-Z]+$/)) {
    return {
      message: 'The username can contain only Latin letters (A-z) and numbers (0-9)'
    }
  }
  return null;
}

export function validateEmail(control: AbstractControl): {[key: string]: any} | null  {
  if (!control.value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
    return {
      message: 'Invalid email address'
    };
  }
  return null;
}

export function validateConfirmPassword(passwordKey: string, confirmPasswordKey: string) {
  return (group: FormGroup): {[key: string]: any} => {
    let password = group.controls[passwordKey];
    let confirmPassword = group.controls[confirmPasswordKey];
    if (password.value !== confirmPassword.value) {
      return {
        message: 'Password mismatch'
      };
    }
  }
}

export function validatePassword(control: AbstractControl): {[key: string]: any} | null  {
  if (control.value.length < 6) return { message: 'Password cannot be less than 6 characters' };
  if (control.value.length > 32) return { message: 'Password cannot be more than 32 characters' };
  if (!control.value.match(/^[0-9a-zA-Z]+$/))
    return { message: 'The password can contain only Latin letters (A-z) and numbers (0-9)' };
  if (!control.value.match(/\d+/g)) return { message: 'Password must contain at least one number' };
  if (!control.value.match(/[a-zA-Z]/)) return { message: 'Password must contain at least one Latin letter' };
  return null;
}
