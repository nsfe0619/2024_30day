import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseElementComponent } from '../base-element.component';

@Component({
    selector: 'app-base-select',
    templateUrl: './base-select.component.html',
    styleUrls: ['./base-select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => BaseSelectComponent),
            multi: true
        }
    ]
})
export class BaseSelectComponent extends BaseElementComponent
{
    override valueChange(event: Event): void
    {
        const select = event.target as HTMLSelectElement;
        this.value = select.value;
        this.onChange(this.value);
        this.onTouch();
    }
}
