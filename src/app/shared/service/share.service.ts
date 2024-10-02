import { Injectable } from '@angular/core';
import { FieldSetting } from '../component/form/element/field-setting.model';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ShareService
{

    constructor() { }

    /**
     * 透過name 取得欄位設定值
     * @param fieldSetting 
     * @param name 
     * @returns FieldSetting
     */
    getSetting(fieldSettings: FieldSetting[], name: string, type: string = 'name'): FieldSetting
    {
        return fieldSettings.find((obj: any) =>
        {
            return obj[type] == name
        }) || { cname: '', name: '', inputType: '' }
    }

    /**
     * 透過表單從傳入設定職組取得符合表單的設定值
     * @param settings 設定植
     * @param fg 表單
     * @returns FieldSetting[]
     */
    getSettingsByForm(settings: FieldSetting[], fg: FormGroup): FieldSetting[]
    {
        return Object.keys(fg.value).map(v =>
        {
            return settings.find(setting => setting.name === v) as FieldSetting;
        })
    }

    getControl(group: FormGroup, columnName: string)
    {
        return group.get(columnName) as FormControl
    }
    typeof(value: any)
    {
        return typeof value;
    }
}
