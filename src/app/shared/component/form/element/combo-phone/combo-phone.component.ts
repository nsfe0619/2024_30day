import { Component, Input, OnInit } from '@angular/core';
import { FieldSetting } from '../field-setting.model';
import { FormControl, FormGroup } from '@angular/forms';
import { ShareService } from 'src/app/shared/service/share.service';

@Component({
    selector: 'app-combo-phone',
    templateUrl: './combo-phone.component.html',
    styleUrls: ['./combo-phone.component.scss']
})
export class ComboPhoneComponent implements OnInit
{
    @Input() fieldSettings!: FieldSetting[];
    @Input() inputForm!: FormGroup;

    constructor(public shareService: ShareService) { }

    ngOnInit(): void
    {
    }

    getControl(group: FormGroup, groupType: string)
    {
        return this.shareService.getControl(group, this.getSettingByGroupType(groupType).name);
    }

    // 用name取得setting
    getSettingByGroupType(groupType: string)
    {
        return this.shareService.getSetting(this.fieldSettings, groupType, 'groupType');
    }
}
