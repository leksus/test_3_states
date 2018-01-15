import {Directive} from '@angular/core';
import {AbstractControl, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";

export function emailValidator(): ValidatorFn {
    const regExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    return (control: AbstractControl): {[key: string]: any} => {
        const forbidden = regExp.test(control.value);
        return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
}

@Directive({
    selector: '[appValidEmail]'
})
export class ValidEmailDirective implements Validator {

    constructor() { }

    validate(c: AbstractControl): ValidationErrors | any {
        return emailValidator()(c);
    }
}
