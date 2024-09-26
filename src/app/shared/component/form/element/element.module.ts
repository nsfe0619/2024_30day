import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field/field.component';
import { BaseTextComponent } from './base-text/base-text.component';
import { BaseTelComponent } from './base-tel/base-tel.component';
import { BaseNumberComponent } from './base-number/base-number.component';
import { BasePasswordComponent } from './base-password/base-password.component';
import { FieldTemplateComponent } from './field-template/field-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseSelectComponent } from './base-select/base-select.component';
import { BaseRadioComponent } from './base-radio/base-radio.component';
import { BaseCheckboxComponent } from './base-checkbox/base-checkbox.component';
import { FormInputComponent } from './form-input/form-input.component';



@NgModule({
    declarations: [
        FieldComponent,
        BaseTextComponent,
        BaseTelComponent,
        BaseNumberComponent,
        BasePasswordComponent,
        FieldTemplateComponent,
        BaseSelectComponent,
        BaseRadioComponent,
        BaseCheckboxComponent,
        FormInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        FormInputComponent
    ]
})
export class ElementModule { }

export interface OptionItem
{
    label: string;
    value: string;
}
