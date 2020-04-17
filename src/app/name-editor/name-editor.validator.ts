import { ValidatorFn, AbstractControl } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    console.log('forbiddenNameValidator: value=', control.value, forbidden);

    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

export function alwayValidNameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    console.log('alwayValidNameValidator: value=', control.value);

    return null;
  };
}
