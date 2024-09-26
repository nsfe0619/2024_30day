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
    constructor(private fb: FormBuilder) { }

    ngOnChanges(): void
    {
        // 用reduce將name作為key值 defaultValue作為Value

        this.pageSetting.form = this.fb.group(this.pageSetting.fieldSettings.reduce((acc: any, item) =>
        {
            acc[item.name] = [item.defaultValue || ''];
            if (item.validator && item.validator.length > 0)
            {
                acc[item.name].push({ validators: item.validator })
            }
            return acc;
        }, {}));
        console.log('pageSetting', this.pageSetting)
    }

    getControl(columnName: string)
    {
        return this.pageSetting.form?.get(columnName) as FormControl
    }

}
