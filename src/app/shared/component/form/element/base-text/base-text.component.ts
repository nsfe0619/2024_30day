import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-base-text',
    templateUrl: './base-text.component.html',
    styleUrls: ['./base-text.component.scss']
})
export class BaseTextComponent implements OnInit
{
    @Input() placeholder: string | undefined;

    constructor() { }

    ngOnInit(): void
    {
    }

}
