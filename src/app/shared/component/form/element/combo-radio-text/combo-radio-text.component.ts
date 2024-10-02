import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ShareService } from 'src/app/shared/service/share.service';
import { FieldSetting } from '../field-setting.model';

@Component({
    selector: 'app-combo-radio-text',
    templateUrl: './combo-radio-text.component.html',
    styleUrls: ['./combo-radio-text.component.scss']
})
export class ComboRadioTextComponent implements OnInit
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
