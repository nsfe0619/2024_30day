import { Component, Input, OnInit } from '@angular/core';
import { FieldSetting } from '../field-setting.model';

@Component({
    selector: 'app-base-number',
    templateUrl: './base-number.component.html',
    styleUrls: ['./base-number.component.scss']
})
export class BaseNumberComponent implements OnInit
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
