import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FieldSetting } from '../field-setting.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseElementComponent } from '../base-element.component';

@Component({
    selector: 'app-base-number',
    templateUrl: './base-number.component.html',
    styleUrls: ['./base-number.component.scss'],
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => BaseNumberComponent),
        multi: true
      }
    ]
})
export class BaseNumberComponent extends BaseElementComponent {

    onInput(event: Event): void {
        const input = event.target as HTMLInputElement;
        console.log('value',input.value)
        this.onChange(input.value);
        this.onTouch();
    }
}
