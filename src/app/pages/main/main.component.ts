import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldSetting } from 'src/app/shared/component/form/element/field-setting.model';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit
{
    fieldObj!: any;
    fieldForm!: FormGroup;
    fieldSettings: FieldSetting[] = [
        {
            name: 'text1',
            cname: '文字欄位1',
            inputType: 'text',
            placeholder: '請輸入文字',
            required: true,
            defaultValue: '123',
            validator:[Validators.required,Validators.max(100)]
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
        },
        {
            name: 'select1',
            cname: '下拉選單1',
            inputType: 'select',
            placeholder: '請選擇',
            required: true,
            defaultValue: '1',
            options: [
                { label: '選項1', value: '1' },
                { label: '選項2', value: '2' },
                { label: '選項3', value: '3' },
            ]
        },
        {
            name: 'radio1',
            cname: '單選1',
            inputType: 'radio',
            placeholder: '',
            required: true,
            defaultValue: '1',
            options: [
                { label: '選項1', value: '1' },
                { label: '選項2', value: '2' },
                { label: '選項3', value: '3' },
            ]
        },
        {
            name: 'checkbox1',
            cname: '多選1',
            inputType: 'checkbox',
            placeholder: '',
            required: true,
            defaultValue: '1,2',
            options: [
                { label: '選項1', value: '1' },
                { label: '選項2', value: '2' },
                { label: '選項3', value: '3' },
            ]
        },
    ];

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void
    {
        // 用reduce將name作為key值 defaultValue作為Value
        this.fieldObj = this.fieldSettings.reduce((acc: any, item) =>
        {
            acc[item.name] = item.defaultValue || '';
            return acc;
        }, {});

        this.fieldForm = this.fb.group(this.fieldObj);
    }

    getControl(columnName: string)
    {
        return this.fieldForm.get(columnName) as FormControl
    }
}