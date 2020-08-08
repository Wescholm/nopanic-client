import {AbstractControl} from "@angular/forms";

export function validateHeading(control: AbstractControl): {[key: string]: any} | null  {
  if (control.value.length < 6) return { message: 'Heading cannot be less than 4 characters' };
  if (control.value.length > 30) return { message: 'Heading cannot be more than 12 characters' };
  if (!control.value.match(/^[0-9a-zA-Z]+$/)) {
    return {
      message: 'The heading can contain only Latin letters (A-z) and numbers (0-9)'
    }
  }
  return null;
}
