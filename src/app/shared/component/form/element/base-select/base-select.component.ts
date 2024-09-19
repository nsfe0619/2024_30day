import { Component, Input, OnInit } from '@angular/core';
import { FieldSetting } from '../field-setting.model';

@Component({
    selector: 'app-base-select',
    templateUrl: './base-select.component.html',
    styleUrls: ['./base-select.component.scss']
})
export class BaseSelectComponent implements OnInit
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
