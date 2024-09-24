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
export class BaseCheckboxComponent extends BaseElementComponent
{
    checkedValue!: string[];
    options!: any[];

    override writeValue(value: string | string[]): void
    {
        this.value = value;
        this.checkedValue = typeof this.value == 'string' ? this.value.split(',') : this.value;
        this.options = this.fieldSetting.options?.map(opt => { return { ...opt, checked: !!this.checkedValue.find(c => c === opt.value) } }) || []

    }

    override valueChange(event: Event)
    {
        const input = event.target as HTMLInputElement;
        let thisOption = this.options.find(opt => opt.value == input.value);
        thisOption.checked = !thisOption.checked;

        this.checkedValue = this.options.filter(opt => opt.checked).map(opt => opt.value);
        this.value = this.checkedValue.join(',');

        this.onChange(this.value);
        this.onTouch();
    }
}
