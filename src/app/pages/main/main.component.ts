import { Component, OnInit } from '@angular/core';
import { FieldSetting } from 'src/app/shared/component/form/element/field-setting.model';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit
{

    fieldSettings: FieldSetting[] = [
        {
            name: 'text1',
            cname: '文字欄位1',
            inputType: 'text',
            placeholder: '請輸入文字',
            required: true,
        },
        {
            name: 'number1',
            cname: '數字欄位',
            inputType: 'number',
            placeholder: '請輸入數字',
            required: true,
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
    }

}