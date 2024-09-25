import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { FieldSetting } from './field-setting.model';
import { Subscription } from 'rxjs';

@Directive()
export abstract class BaseElementComponent implements ControlValueAccessor, OnInit, OnDestroy {
    @Input() fieldSetting!: FieldSetting;
    @Input() control!: FormControl; // 接收 FormControl
    protected valueChangesSubscription: Subscription = new Subscription();  // 用來追蹤訂閱


    onChange: any = () => { };
    onTouch: any = () => { };

    ngOnInit(): void {
        // console.log('control',this.control)
        // 監聽 FormControl 的值變化
        if (this.control) {
            this.valueChangesSubscription = this.control.valueChanges.subscribe((newValue: any) => {
                console.log('newValue',newValue)
                this.onChange(newValue);
            });
        }
    }
    ngOnDestroy(): void {
        if (this.valueChangesSubscription) {
            this.valueChangesSubscription.unsubscribe();  // 取消訂閱
        }
    }

    writeValue(value: string | string[]): void {
        if (this.control) {
            this.control.setValue(value, { emitEvent: false });
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        if (isDisabled) {
            this.control.disable();
        } else {
            this.control.enable();
        }
    }
}