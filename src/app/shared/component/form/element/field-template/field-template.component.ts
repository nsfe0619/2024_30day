import { Component, Input, OnInit } from '@angular/core';
import { FieldSetting } from '../field-setting.model';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-field-template',
    templateUrl: './field-template.component.html',
    styleUrls: ['./field-template.component.scss']
})
export class FieldTemplateComponent implements OnInit
{
    @Input() fieldSetting!: FieldSetting;
    @Input() control!: FormControl;

    constructor() { }

    ngOnInit(): void
    {
    }

}
