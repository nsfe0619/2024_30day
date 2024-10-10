import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FieldSetting } from '../field-setting.model';
import { ValidatorService } from 'src/app/shared/service/validator.service';
import { ShareService } from 'src/app/shared/service/share.service';

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
    Object = Object;
    editRowNum = 1;

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
        private validatorService: ValidatorService,
        public shareService: ShareService,
    ) { }

    ngOnInit(): void
    {
        if (this.subFormGroup) return;
        this.titleArr = [];
        this.innerFormArray = new FormArray<FormGroup>([]);
        let defaultValue!: string[];
        this.subFormGroup = new FormGroup({});

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
        if (this.inputFormArray.length > 0) return;
        defaultValue.forEach((value: any) =>
        {
            this.subFormGroup.reset();
            this.subFormGroup.patchValue(value);
            this.innerFormArray.push(this.fb.group(this.subFormGroup.value));
        })
        this.inputFormArray.clear();

        this.innerFormArray.value.forEach((group: AbstractControl) =>
        {
            this.inputFormArray.push(this.fb.group(group));
        });

        this.subFormGroup.reset();
    }

    add()
    {
        this.inputFormArray.push(this.fb.group(this.subFormGroup.value));
        this.editRowNum = this.inputFormArray.value.length;
    }
    delete(index: number)
    {
        this.inputFormArray.removeAt(index);
    }
    cancel()
    {
        this.subFormGroup.reset();
        this.editRowNum = this.inputFormArray.value.length;
    }
    edit(index: number)
    {
        this.editRowNum = index;
        this.subFormGroup.patchValue(this.inputFormArray.controls[index].value);
    }
    save(index: number)
    {
        this.inputFormArray.controls[index].patchValue(this.subFormGroup.value);
        this.subFormGroup.reset();
        this.editRowNum = this.inputFormArray.value.length;
    }
}
