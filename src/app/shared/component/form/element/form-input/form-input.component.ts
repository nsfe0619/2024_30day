import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PageSetting } from '../field-setting.model';

@Component({
    selector: 'app-form-input',
    templateUrl: './form-input.component.html',
    styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnChanges
{
    @Input() pageSetting!: PageSetting
    fieldObj!: object;
    innerForm = this.fb.group({});
    constructor(private fb: FormBuilder) { }

    ngOnChanges(): void
    {
        this.pageSetting.form = this.fb.group({});
        this.pageSetting.fieldSettings.forEach(setting =>
        {
            let newControl = this.fb.control(setting.defaultValue, { validators: setting.validator });
            if (!setting.groupName)
            {
                this.innerForm.addControl(setting.name, newControl);
            } else
            {
                if (!this.innerForm.contains(setting.groupName))
                {
                    this.innerForm.addControl(setting.groupName, new FormGroup({}));
                }
                (this.innerForm.get(setting.groupName) as FormGroup).addControl(setting.groupType!, this.fb.control(setting.defaultValue, { validators: setting.validator }))
            }
            (this.pageSetting.form as FormGroup).addControl(setting.name, newControl);
        })
        // console.log('innerForm', this.innerForm.value);
        // console.log('this.pageSetting', this.pageSetting.form.value);
    }

    getControl(columnName: string)
    {
        return this.pageSetting.form?.get(columnName) as FormControl
    }

}
