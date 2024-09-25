import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseElementComponent } from '../base-element.component';

@Component({
    selector: 'app-base-radio',
    templateUrl: './base-radio.component.html',
    styleUrls: ['./base-radio.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => BaseRadioComponent),
            multi: true
        }
    ]
})
export class BaseRadioComponent extends BaseElementComponent
{
    onRadioChange(value: string): void {
        this.control.setValue(value);
        this.onChange(value); // 更新 ControlValueAccessor 的值
        this.onTouch();       // 標記為已觸碰
      }
}
