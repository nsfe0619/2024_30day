import { Component, Input, OnChanges } from '@angular/core';
import { FieldSetting } from '../field-setting.model';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnChanges
{
    @Input() fieldSetting!: FieldSetting;
    @Input() control!: FormControl;
    @Input() disabled = false;

    constructor() { }

    ngOnChanges(): void
    {
        this.fieldSetting.disabled = this.disabled;
    }
}
