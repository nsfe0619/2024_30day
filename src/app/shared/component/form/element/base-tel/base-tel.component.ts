import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-base-tel',
    templateUrl: './base-tel.component.html',
    styleUrls: ['./base-tel.component.scss']
})
export class BaseTelComponent implements OnInit
{
    @Input() placeholder: string | undefined;

    constructor() { }

    ngOnInit(): void
    {
    }

}
