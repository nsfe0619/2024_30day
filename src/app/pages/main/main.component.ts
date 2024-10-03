import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { PageSetting } from 'src/app/shared/component/form/element/field-setting.model';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit
{
    page = 0;
    pageSettings: PageSetting[] = [{
        title: '第一頁',
        fieldSettings: [
            {
                name: 'addressCity',
                cname: '地址',
                inputType: 'select',
                groupName: 'address1',
                groupType: 'address-city',
                options: []
            },
            {
                name: 'addressArea',
                cname: '地址行政區',
                inputType: 'select',
                groupName: 'address1',
                groupType: 'address-area',
                options: []
            },
            {
                name: 'address',
                cname: '地址',
                inputType: 'text',
                groupName: 'address1',
                groupType: 'address',
                options: []
            },
            {
                name: 'radioTextRadio1',
                cname: '控制輸入欄位',
                inputType: 'radio',
                defaultValue: 'true',
                groupName: 'radioText1',
                groupType: 'radioText-radio',
                options: [
                    { label: '是', value: 'true' },
                    { label: '否', value: 'false' },
                ]
            },
            {
                name: 'radioTextText1',
                cname: '控制輸入欄位',
                inputType: 'text',
                groupName: 'radioText1',
                groupType: 'radioText-text',
                placeholder: '勾選後才可輸入',
                defaultValue: '',
                validator: [Validators.maxLength(3)]
            },
            {
                name: 'area1',
                cname: '電話欄位',
                inputType: 'text',
                groupName: 'phoneGroup1',
                groupType: 'phone-area',
                placeholder: '',
                defaultValue: '00',
                validator: [Validators.maxLength(3)]
            },
            {
                name: 'phone1',
                cname: '電話欄位',
                inputType: 'text',
                groupName: 'phoneGroup1',
                groupType: 'phone-number',
                placeholder: '0000000',
                defaultValue: '',
                validator: [Validators.maxLength(10)]
            },
            {
                name: 'ext1',
                cname: '電話欄位',
                inputType: 'text',
                groupName: 'phoneGroup1',
                groupType: 'phone-ext',
                placeholder: '0000',
                required: true,
                defaultValue: '',
                validator: [Validators.maxLength(4)]
            },
            {
                name: 'text1',
                cname: '文字欄位1',
                inputType: 'text',
                placeholder: '請輸入文字',
                required: true,
                defaultValue: '123',
                validator: [Validators.required, Validators.maxLength(10)]
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
        ]
    }, {
        title: '第二頁',
        fieldSettings: [
            {
                name: 'text1',
                cname: '文字欄位1',
                inputType: 'text',
                placeholder: '請輸入文字',
                required: true,
                defaultValue: '123',
                validator: [Validators.required, Validators.maxLength(10)]
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
        ]
    }, {
        title: '第三頁',
        fieldSettings: [
            {
                name: 'text1',
                cname: '文字欄位1',
                inputType: 'text',
                placeholder: '請輸入文字',
                required: true,
                defaultValue: '123',
                validator: [Validators.required, Validators.maxLength(10)]
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
        ]
    }]


    constructor() { }

    ngOnInit(): void
    {
    }

    pageNext()
    {
        if (this.pageSettings[this.page].form?.invalid) return;
        if (this.page < this.pageSettings.length - 1)
        {
            this.page = Number(this.page) + 1;
        }
    }

    pagePrev()
    {
        if (this.page > 0)
            this.page = Number(this.page) - 1;
    }
}