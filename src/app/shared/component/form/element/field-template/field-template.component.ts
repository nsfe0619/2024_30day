import { Component, Input, OnInit } from '@angular/core';
import { FieldSetting } from '../field-setting.model';

@Component({
    selector: 'app-field-template',
    templateUrl: './field-template.component.html',
    styleUrls: ['./field-template.component.scss']
})
export class FieldTemplateComponent implements OnInit
{
    @Input() fieldSetting!: FieldSetting;
    @Input() fieldObj!: any;

    constructor() { }

    ngOnInit(): void
    {
    }

}
