import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseElementComponent } from '../base-element.component';

@Component({
    selector: 'app-base-tel',
    templateUrl: './base-tel.component.html',
    styleUrls: ['./base-tel.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => BaseTelComponent),
            multi: true
        }
    ]
})
export class BaseTelComponent extends BaseElementComponent
{
}
