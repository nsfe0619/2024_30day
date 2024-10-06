import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ValidatorService
{

    constructor() { }

    getValidators(validatorStrings: string[]): ValidatorFn[]
    {
        return validatorStrings.map((v: string) =>
        {
            let keyword = v.split(':')
            switch (keyword[0])
            {
                case 'required':
                    return Validators.required;
                case 'maxLength':
                    return Validators.maxLength(Number(keyword[1]));
                case 'requiredTrueWithField':
                    return this.requiredTrueWithField(keyword[1]);
                default:
                    return null;
            }
        }
        ).filter(v => !!v) as ValidatorFn[]
    }

    requiredTrueWithField(fieldName: string): ValidatorFn
    {
        return (control: AbstractControl): { [key: string]: any } | null =>
        {
            if (!control.parent)
            {
                return null;  // 如果 control 沒有 parent，則返回 null（暫時不驗證）
            }

            const fieldControl = control.parent.get(fieldName);
            fieldControl?.valueChanges.pipe(distinctUntilChanged()).subscribe(r =>
            {
                control.updateValueAndValidity();
            })
            if (fieldControl && fieldControl.value == "true")
            {
                // 如果 A 為 true，B 必填
                return Validators.required(control) ? { required: true } : null;
            }

            return null;  // A 不是 true，B 無需必填
        };
    }
}
