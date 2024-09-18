import { Component, Input, OnInit } from '@angular/core';
import { FieldSetting } from '../field-setting.model';

@Component({
    selector: 'app-base-text',
    templateUrl: './base-text.component.html',
    styleUrls: ['./base-text.component.scss']
})
export class BaseTextComponent implements OnInit
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
