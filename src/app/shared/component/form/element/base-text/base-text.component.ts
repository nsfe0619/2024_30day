import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseElementComponent } from '../base-element.component';

@Component({
    selector: 'app-base-text',
    templateUrl: './base-text.component.html',
    styleUrls: ['./base-text.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => BaseTextComponent),
            multi: true
        },]
})
export class BaseTextComponent extends BaseElementComponent
{
}
