import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { ShareService } from 'src/app/shared/service/share.service';
import { ValidatorService } from 'src/app/shared/service/validator.service';
import { FieldSetting, PageSetting } from '../field-setting.model';
import { DialogService } from 'src/app/shared/service/dialog.service';

@Component({
    selector: 'app-list-pop',
    templateUrl: './list-pop.component.html',
    styleUrls: ['./list-pop.component.scss']
})
export class ListPopComponent implements OnInit
{
    @ViewChild('add') add!: TemplateRef<any>;
    @ViewChild('edit') edit!: TemplateRef<any>;
    @Input() fieldSettings!: FieldSetting[];
    @Input() inputForm!: any;
    innerFormArray!: FormArray;
    subFormGroup!: FormGroup;
    titleArr!: any[];
    Object = Object;
    editRowNum = 1;
    dialogPagingSetting!: PageSetting;

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
        private dialogService: DialogService,
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
                this.titleArr.push(setting);
                this.subFormGroup.addControl(setting.name, newControl);
            } else
            {
                defaultValue = setting.defaultValue! as string[];
            }
        })

        this.dialogPagingSetting = {
            title: '',
            form: this.subFormGroup,
            fieldSettings: this.fieldSettings
                .filter(setting => setting.inputType != 'list').map(setting =>
                {
                    let result = { ...setting }
                    delete result.groupName;
                    delete result.groupType;
                    return result;
                })
        }

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

    openAdd()
    {
        this.dialogService.openDialog(this.add);
    }
    addSubmit()
    {
        this.inputFormArray.push(this.fb.group(this.subFormGroup.value));
        this.dialogService.closeDialog();
        this.subFormGroup.reset();
    }
    openEdit(index: number)
    {
        this.editRowNum = index;
        this.dialogService.openDialog(this.edit);
        this.subFormGroup.patchValue(this.inputFormArray.controls[index].value);
        console.log('subFormGroup', this.subFormGroup.value);
    }
    editSubmit()
    {
        this.inputFormArray.controls[this.editRowNum].patchValue(this.subFormGroup.value);
        this.dialogService.closeDialog();
        this.subFormGroup.reset();
    }


    delete(index: number)
    {
        this.inputFormArray.removeAt(index);
    }
}
