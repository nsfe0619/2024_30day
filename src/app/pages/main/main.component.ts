import { Component, OnInit } from '@angular/core';
import { FieldSetting } from 'src/app/shared/component/form/element/field-setting.model';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit
{
    fieldObj!: any;

    fieldSettings: FieldSetting[] = [
        {
            name: 'text1',
            cname: '文字欄位1',
            inputType: 'text',
            placeholder: '請輸入文字',
            required: true,
            defaultValue: '123'
        },
        {
            name: 'number1',
            cname: '數字欄位',
            inputType: 'number',
            placeholder: '請輸入數字',
            required: true,
            defaultValue: '123'
        },
        {
            name: 'tel1',
            cname: '電話欄位1',
            inputType: 'tel',
            placeholder: '請輸入',
            required: true,
        },
        {
            name: 'password1',
            cname: '密碼欄位1',
            inputType: 'password',
            placeholder: '請輸入',
            required: true,
        }
    ];

    constructor() { }

    ngOnInit(): void
    {
        // 用reduce將name作為key值 defaultValue作為Value
        this.fieldObj = this.fieldSettings.reduce((acc: any, item) =>
        {
            acc[item.name] = item.defaultValue || '';
            return acc;
        }, {});
    }

}