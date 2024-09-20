import { Component, Input, OnInit } from '@angular/core';
import { FieldSetting } from '../field-setting.model';

@Component({
    selector: 'app-base-radio',
    templateUrl: './base-radio.component.html',
    styleUrls: ['./base-radio.component.scss']
})
export class BaseRadioComponent implements OnInit
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
        console.log('value', this.value)
        this.fieldObj[this.fieldSetting.name] = this.value;
    }

}
