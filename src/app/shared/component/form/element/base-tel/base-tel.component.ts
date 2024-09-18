import { Component, Input, OnInit } from '@angular/core';
import { FieldSetting } from '../field-setting.model';

@Component({
    selector: 'app-base-tel',
    templateUrl: './base-tel.component.html',
    styleUrls: ['./base-tel.component.scss']
})
export class BaseTelComponent implements OnInit
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
