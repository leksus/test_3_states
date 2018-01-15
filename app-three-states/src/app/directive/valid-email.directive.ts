import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";

export function emailValidator(): ValidatorFn {
    const regExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    return (control: AbstractControl): {[key: string]: any} => {
        const invalid = regExp.test(control.value);
        return invalid ? null : {'invalidEmail': {value: control.value}};
    };
}

@Directive({
    selector: '[appValidEmail]',
    providers: [{provide: NG_VALIDATORS, useExisting: emailValidator, multi: true}]
})
export class ValidEmailDirective implements Validator {

    constructor() { }

    validate(c: AbstractControl): ValidationErrors | any {
        return emailValidator()(c);
    }
}
