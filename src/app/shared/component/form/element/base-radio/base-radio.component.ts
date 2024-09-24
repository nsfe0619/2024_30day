import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FieldSetting } from '../field-setting.model';
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
}
