import { FormGroup } from "@angular/forms";
import { OptionItem } from "./element.module";

export interface FieldSetting
{
    name: string;
    cname: string;
    inputType: string;
    groupName?: string;
    groupType?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    defaultValue?: string | undefined;
    options?: OptionItem[];
    validator?: string[]
}

export interface PageSetting
{
    title: string;
    form?: FormGroup;
    fieldSettings: FieldSetting[];
}