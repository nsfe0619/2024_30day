import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShareService } from 'src/app/shared/service/share.service';
import { FieldSetting } from '../field-setting.model';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
    selector: 'app-combo-address',
    templateUrl: './combo-address.component.html',
    styleUrls: ['./combo-address.component.scss']
})
export class ComboAddressComponent implements OnChanges
{
    @Input() fieldSettings!: FieldSetting[];
    @Input() inputForm!: FormGroup;

    constructor(public shareService: ShareService,
        private dataService: DataService
    )
    {
    }
    allOptions!: any[];

    ngOnChanges(): void
    {
        if (!this.allOptions)
        {
            this.dataService.getAddressData().subscribe((data: any) =>
            {
                this.allOptions = data.options;
            });
            return;
        }
        let citySetting = this.getSettingByGroupType('address-city');
        citySetting.options = this.allOptions?.filter((opt: any) => opt.type == "CITY").map(opt => { return { label: opt.name, value: opt.code } })
        let cityControl = this.getControl(this.inputForm, 'address-city') as FormControl;
        if (!!cityControl.value)
        {
            let areaSetting = this.getSettingByGroupType('address-area');
            areaSetting.options = this.allOptions?.filter((opt: any) =>
            {
                return opt.type == "ZIP" && opt.cityCode == cityControl.value
            }).map(opt => { return { label: opt.name, value: opt.code } })
        }

    }

    getControl(group: FormGroup, groupType: string): FormControl
    {
        return this.shareService.getControl(group, this.getSettingByGroupType(groupType).name);
    }

    // 用name取得setting
    getSettingByGroupType(groupType: string)
    {
        return this.shareService.getSetting(this.fieldSettings, groupType, 'groupType');
    }
}
