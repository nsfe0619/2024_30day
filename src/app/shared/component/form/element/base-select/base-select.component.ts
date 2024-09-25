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
}
