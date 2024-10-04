import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldSetting, PageSetting } from '../field-setting.model';
import { Subject, takeUntil } from 'rxjs';
import { ShareService } from 'src/app/shared/service/share.service';

@Component({
    selector: 'app-form-input',
    templateUrl: './form-input.component.html',
    styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnChanges
{
    @Input() pageSetting!: PageSetting
    fieldObj!: object;
    innerForm = this.fb.group({});
    constructor(private fb: FormBuilder,
        public shareService: ShareService
    ) { }
    private destroy$ = new Subject<void>(); // 用來發出結束通知

    ngOnChanges(): void
    {
        this.pageSetting.form = this.fb.group({});
        this.innerForm = this.fb.group({});
        this.pageSetting.fieldSettings.forEach(setting =>
        {
            let newControl = this.fb.control(setting.defaultValue) as FormControl;
            if (setting.validator && setting.validator?.length > 0)
            {
                setting.validator?.forEach((v: string) =>
                {
                    let keyword = v.split(':')
                    switch (keyword[0])
                    {
                        case 'required':
                            setting.required = true;
                            newControl.addValidators(Validators.required);
                            break;
                        case 'maxLength':
                            newControl.addValidators(Validators.maxLength(Number(keyword[1])));
                            break;
                    }
                })
            }

            (this.pageSetting.form as FormGroup).addControl(setting.name, newControl);
            if (!setting.groupName)
            {
                this.innerForm.addControl(setting.name, newControl);
            } else
            {
                if (!this.innerForm.contains(setting.groupName))
                {
                    this.innerForm.addControl(setting.groupName, new FormGroup({}));
                }
                (this.innerForm.get(setting.groupName) as FormGroup).addControl(setting.name!, this.pageSetting.form?.get(setting.name))
            }

            (this.pageSetting.form?.get(setting.name) as FormGroup)
                .valueChanges.pipe(takeUntil(this.destroy$)).subscribe(v =>
                {
                    this.pageSetting.form?.updateValueAndValidity();
                })
        })
    }
    ngOnDestroy()
    {
        // 發出通知，告訴所有使用 takeUntil 的訂閱取消
        this.destroy$.next();
        this.destroy$.complete();
    }

    // 取得該區域欄位列表
    getGroupList(group: FormGroup): string | any
    {
        let Result = Object.keys(group.value).map(obj =>
        {
            let innerControl = group.get(obj)
            if (innerControl?.value !== null && typeof innerControl?.value === 'object')
            {
                return innerControl
            } else 
            {
                return obj;
            }
        });
        return Result;
    }

}
