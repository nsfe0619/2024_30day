import { Component, OnInit } from '@angular/core';
import { PageSetting } from 'src/app/shared/component/form/element/field-setting.model';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit
{
    page = 0;
    pageSettings!: PageSetting[]

    constructor(private dataService: DataService) { }

    ngOnInit(): void
    {
        this.dataService.getMainData().subscribe(data =>
        {
            this.pageSettings = data.pageSettings;
        })
    }

    pageNext()
    {
        if (this.pageSettings[this.page].form?.invalid) return;
        if (this.page < this.pageSettings.length - 1)
        {
            this.page = Number(this.page) + 1;
        }
    }

    pagePrev()
    {
        if (this.page > 0)
            this.page = Number(this.page) - 1;
    }
}