import { Directive, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { FieldSetting } from './field-setting.model';

@Directive()
export abstract class BaseElementComponent implements ControlValueAccessor {
    @Input() fieldSetting!: FieldSetting;
    @Input() fieldObj!: any;
    @Input() value: string | string[] = '';

    onChange: any = () => { };
    onTouch: any = () => { };

    writeValue(value: string | string[]): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        // 可以根據需求實現禁用邏輯
    }
}