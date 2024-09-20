import { OptionItem } from "./element.module";

export interface FieldSetting
{
    name: string;
    cname: string;
    inputType: string;
    placeholder?: string;
    required: boolean;
    defaultValue?: string | undefined;
    options?: OptionItem[];
}