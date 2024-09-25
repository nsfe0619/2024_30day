import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseElementComponent } from '../base-element.component';

@Component({
    selector: 'app-base-password',
    templateUrl: './base-password.component.html',
    styleUrls: ['./base-password.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => BasePasswordComponent),
            multi: true
        }
    ]
})
export class BasePasswordComponent extends BaseElementComponent {
}
