import { Component, Input, OnInit } from '@angular/core';
import { FieldSetting } from '../field-setting.model';
import { BaseElementComponent } from '../base-element.component';

@Component({
    selector: 'app-base-checkbox',
    templateUrl: './base-checkbox.component.html',
    styleUrls: ['./base-checkbox.component.scss']
})
export class BaseCheckboxComponent extends BaseElementComponent {
    checkedValue!: string[];
    options!: any[];
    ngOnInit(): void {
        this.checkedValue = this.fieldObj[this.fieldSetting.name].split(',');
        this.options = this.fieldSetting.options?.map(opt => { return { ...opt, checked: !!this.checkedValue.find(c => c === opt.value) } }) || []
    }

    valueChange(value: string) {
        let thisOption = this.options.find(opt => opt.value == value);
        thisOption.checked = !thisOption.checked;

        this.checkedValue = this.options.filter(opt => opt.checked).map(opt => opt.value);
        this.fieldObj[this.fieldSetting.name] = this.checkedValue.join(',');
    }
}
