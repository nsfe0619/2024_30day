import { Component, Input, OnInit } from '@angular/core';
import { FieldSetting } from '../field-setting.model';

@Component({
    selector: 'app-base-password',
    templateUrl: './base-password.component.html',
    styleUrls: ['./base-password.component.scss']
})
export class BasePasswordComponent implements OnInit
{
    @Input() fieldSetting!: FieldSetting;
    @Input() fieldObj!: any;
    value!: string;


    constructor() { }

    ngOnInit(): void
    {
        this.value = this.fieldObj[this.fieldSetting.name];
    }

    valueChange()
    {
        this.fieldObj[this.fieldSetting.name] = this.value;
    }

}
