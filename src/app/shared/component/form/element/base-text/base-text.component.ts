import { Component, forwardRef, Input } from '@angular/core';
import { FieldSetting } from '../field-setting.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-base-text',
    templateUrl: './base-text.component.html',
    styleUrls: ['./base-text.component.scss'],
    providers:[
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => BaseTextComponent),
          multi: true
        },]
})
export class BaseTextComponent implements ControlValueAccessor {
    @Input() fieldSetting!: FieldSetting;
    @Input() fieldObj!: any;
    @Input() value: string = '';

    // 這些是 ControlValueAccessor 的實現
    onChange: any = () => { };
    onTouch: any = () => { };

    writeValue(value: any): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        throw new Error('Method not implemented.');
    }

    onInput(event: Event): void {
        const input = event.target as HTMLInputElement;
        console.log('value',input.value)
        this.onChange(input.value);
        this.onTouch();
    }
}
