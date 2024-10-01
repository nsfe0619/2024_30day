import { Component, Input, OnInit } from '@angular/core';
import { FieldSetting } from '../field-setting.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-combo-phone',
    templateUrl: './combo-phone.component.html',
    styleUrls: ['./combo-phone.component.scss']
})
export class ComboPhoneComponent implements OnInit
{
    @Input() fieldSettings!: FieldSetting[];
    @Input() inputForm!: FormGroup;

    constructor() { }

    ngOnInit(): void
    {
    }

    getControl(group: FormGroup, name: string)
    {
        return group?.get(name) as FormControl
    }

    // 用name取得setting
    getSettingByGroupType(groupType: string)
    {
        return this.fieldSettings.find((obj: any) =>
        {
            return obj.groupType == groupType
        }) || { cname: '', name: '', inputType: '' }
    }
}
