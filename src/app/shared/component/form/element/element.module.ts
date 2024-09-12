import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field/field.component';
import { BaseTextComponent } from './base-text/base-text.component';
import { BaseTelComponent } from './base-tel/base-tel.component';
import { BaseNumberComponent } from './base-number/base-number.component';
import { BasePasswordComponent } from './base-password/base-password.component';
import { FieldTemplateComponent } from './field-template/field-template.component';



@NgModule({
    declarations: [
        FieldComponent,
        BaseTextComponent,
        BaseTelComponent,
        BaseNumberComponent,
        BasePasswordComponent,
        FieldTemplateComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        FieldTemplateComponent
    ]
})
export class ElementModule { }
