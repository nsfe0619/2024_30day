import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-base-number',
    templateUrl: './base-number.component.html',
    styleUrls: ['./base-number.component.scss']
})
export class BaseNumberComponent implements OnInit
{
    @Input() placeholder: string | undefined;

    constructor() { }

    ngOnInit(): void
    {
    }

}
