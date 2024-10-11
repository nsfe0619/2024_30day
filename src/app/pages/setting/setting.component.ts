import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { PageSetting } from 'src/app/shared/component/form/element/field-setting.model';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit
{

    pageSettings!: PageSetting[];
    settings!: any;
    constructor(private dataService: DataService,
        private fb: FormBuilder
    ) { }

    ngOnInit(): void
    {
        this.dataService.getSettingData().subscribe(data =>
        {
            this.pageSettings = data.pageSettings;
            this.dataService.getMainData().subscribe(mainData =>
            {
                this.settings = mainData.pageSettings
                let page1Form = this.settings[0].fieldSettings
                let settingPage = this.pageSettings[0];
                let settingFormArray = settingPage.form?.get(Object.keys(settingPage.form.value)[0]) as FormArray
                if (settingFormArray)
                {
                    page1Form.forEach((setting: any) =>
                    {
                        settingFormArray.push(this.fb.group(setting));
                    })
                }
            })
        })

    }

}
