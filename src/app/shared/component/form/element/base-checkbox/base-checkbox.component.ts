import { Component, forwardRef } from '@angular/core';
import { BaseElementComponent } from '../base-element.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-base-checkbox',
    templateUrl: './base-checkbox.component.html',
    styleUrls: ['./base-checkbox.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => BaseCheckboxComponent),
            multi: true
        }
    ]
})
export class BaseCheckboxComponent extends BaseElementComponent {
    checkedValue!: string[];
    options!: any[];

    override ngOnInit(): void {
        // console.log('control',this.control)
        // 監聽 FormControl 的值變化
        if (this.control) {
            this.checkedValue = typeof this.control.value == 'string' ? this.control.value.split(',') : this.control.value;
            this.options = this.fieldSetting.options?.map(opt => { return { ...opt, checked: !!this.checkedValue.find(c => c === opt.value) } }) || []
        }
    }
    onCheckboxChange(value:string) {
        let thisOption = this.options.find(opt => opt.value == value);
        thisOption.checked = !thisOption.checked;

        this.checkedValue = this.options.filter(opt => opt.checked).map(opt => opt.value);
        let returnValue = this.checkedValue.join(',');

        this.control.setValue(returnValue)
        this.onChange(returnValue);
        this.onTouch();
    }
}
