import { Component, Input, OnInit } from '@angular/core';
import { FieldSetting } from '../field-setting.model';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-combo-field-template',
    templateUrl: './combo-field-template.component.html',
    styleUrls: ['./combo-field-template.component.scss']
})
export class ComboFieldTemplateComponent implements OnInit
{

    @Input() fieldSettings!: FieldSetting[];
    @Input() inputForm!: FormGroup;
    constructor() { }

    ngOnInit(): void
    {
    }

    findFieldSetting(value: string)
    {
        return !!this.fieldSettings.find(setting => { return setting.groupType?.startsWith(value) })
    }
}
