import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FieldSetting } from '../field-setting.model';
import { ValidatorService } from 'src/app/shared/service/validator.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit
{
    @Input() fieldSettings!: FieldSetting[];
    @Input() inputForm!: any;
    innerFormArray!: FormArray;
    subFormGroup!: FormGroup;
    titleArr!: string[];

    get listKey()
    {
        return Object.keys(this.inputForm.value)[0]
    }

    get inputFormArray()
    {
        return this.inputForm.get(this.listKey) as FormArray
    }

    constructor(
        private fb: FormBuilder,
        private validatorService: ValidatorService
    ) { }

    ngOnInit(): void
    {
        this.titleArr = [];
        this.innerFormArray = new FormArray<FormGroup>([]);
        this.subFormGroup = new FormGroup({});
        let defaultValue!: string[];

        this.fieldSettings.forEach(setting =>
        {
            if (setting.inputType != 'list')
            {
                let newControl = this.fb.control(setting.defaultValue) as FormControl;

                if (setting.validator && setting.validator?.length > 0)
                {
                    if (!!setting.validator.find(v => v == 'required')) setting.required = true;
                    newControl.addValidators(this.validatorService.getValidators(setting.validator));
                }
                this.titleArr.push(setting.cname);
                this.subFormGroup.addControl(setting.name, newControl);
            } else
            {
                defaultValue = setting.defaultValue! as string[];
            }
        })
        defaultValue.forEach((value: any) =>
        {
            this.subFormGroup.reset();
            this.subFormGroup.patchValue(value);
            this.innerFormArray.push(this.subFormGroup);
        })
        this.inputFormArray.clear();

        this.innerFormArray.controls.forEach((group: AbstractControl) =>
        {
            this.inputFormArray.push(group);
        });
    }

}
