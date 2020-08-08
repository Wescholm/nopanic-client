import {AbstractControl} from "@angular/forms";

export function validateHeading(control: AbstractControl): {[key: string]: any} | null  {
  if (control.value.length < 6) return { message: 'Heading cannot be less than 6 characters' };
  if (control.value.length > 30) return { message: 'Heading cannot be more than 30 characters' };
  if (!control.value.match(/^[0-9a-zA-Z\s]+$/)) {
    return {
      message: 'The heading can contain only Latin letters (A-z) and numbers (0-9)'
    }
  }
  return null;
}

export function validateDescription(control: AbstractControl): {[key: string]: any} | null  {
  console.log(control.value)
  if (control.value.length > 1500) return { message: 'Description cannot be more than 1500 characters' };
  return null;
}

export function validateShortDescription(control: AbstractControl): {[key: string]: any} | null  {
  if (control.value.length > 150) return { message: 'Short description cannot be more than 150 characters' };
  if (control.value.length < 6) return { message: 'Short description cannot be less than 6 characters' };
  return null;
}

export function validateExecutionDate(control: AbstractControl): {[key: string]: any} | null  {
  if (!control.value) return { message: 'Date cannot be empty' };
  return null;
}

export function validatePrice (control: AbstractControl): {[key: string]: any} | null  {
  if (!control.value.match(/^\d+([,.]\d{1,2})?$/)) return { message: 'Incorrect price' };
  return null;
}

export function validateName (control: AbstractControl): {[key: string]: any} | null  {
  if (!control.value.match(/^[a-zA-Z\s]+$/)) return { message: 'Name can only contain letters' };
  if (control.value.length < 2) return { message: 'Name cannot be less than 2 characters' };
  if (control.value.length > 20) return { message: 'Name cannot be more than 20 characters' };
  return null;
}
