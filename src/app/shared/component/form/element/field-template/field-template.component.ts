import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-field-template',
    templateUrl: './field-template.component.html',
    styleUrls: ['./field-template.component.scss']
})
export class FieldTemplateComponent implements OnInit
{
    @Input() type: string = 'text';
    @Input() title: string = '標題';
    @Input() required: boolean = false;
    @Input() placeholder: string | undefined;

    constructor() { }

    ngOnInit(): void
    {
    }

}
