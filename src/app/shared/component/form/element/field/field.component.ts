import { Component, Input, OnInit } from '@angular/core';
import { FieldSetting } from '../field-setting.model';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit
{
    @Input() fieldSetting!: FieldSetting;
    @Input() fieldObj!: any;
    @Input() control!:FormControl;

    constructor() { }

    ngOnInit(): void
    {
    }
}
