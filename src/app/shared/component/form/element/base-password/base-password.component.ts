import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-base-password',
    templateUrl: './base-password.component.html',
    styleUrls: ['./base-password.component.scss']
})
export class BasePasswordComponent implements OnInit
{
    @Input() placeholder: string | undefined;

    constructor() { }

    ngOnInit(): void
    {
    }

}
