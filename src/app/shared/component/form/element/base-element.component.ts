import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { FieldSetting } from './field-setting.model';
import { Subscription } from 'rxjs';

@Directive()
export abstract class BaseElementComponent implements ControlValueAccessor, OnInit, OnDestroy
{
    @Input() fieldSetting!: FieldSetting;
    @Input() control!: FormControl; // 接收 FormControl
    protected valueChangesSubscription: Subscription = new Subscription();  // 用來追蹤訂閱


    onChange: any = () => { };
    onTouch: any = () => { };

    ngOnInit(): void
    {
        // 監聽 FormControl 的值變化
        if (this.control)
        {
            this.valueChangesSubscription = this.control.valueChanges.subscribe((newValue: any) =>
            {
                this.onChange(newValue);
            });
        }
    }
    ngOnDestroy(): void
    {
        if (this.valueChangesSubscription)
        {
            this.valueChangesSubscription.unsubscribe();  // 取消訂閱
        }
    }

    writeValue(value: string | string[]): void
    {
        if (this.control)
        {
            this.control.setValue(value, { emitEvent: false });
        }
    }

    registerOnChange(fn: any): void
    {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void
    {
        this.onTouch = fn;
    }

    getError()
    {
        let errors = this.control.errors;
        if (errors)
        {
            if (errors['required'])
                return '必填';
            else if (errors['maxlength'])
                return '長度不可超過' + errors['maxlength']['requiredLength'];
            else
                return '';
        } else
        {
            return '';
        }
    }

    setDisabledState(isDisabled: boolean): void
    {
        if (isDisabled)
        {
            this.control.disable();
        } else
        {
            this.control.enable();
        }
    }
}